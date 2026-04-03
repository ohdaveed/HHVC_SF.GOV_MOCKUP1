const {
  PAGES: HHVC_PAGES,
  GROUPS: HHVC_GROUPS,
  PAGE_TYPES: HHVC_PAGE_TYPES,
  COMPONENT_TYPES: HHVC_COMPONENT_TYPES
}=window.HHVC_DATA || {};

if(!HHVC_PAGES || !HHVC_GROUPS || !HHVC_PAGE_TYPES || !HHVC_COMPONENT_TYPES){
  throw new Error('Missing HHVC data. Ensure hhvc_page_data.js loads before hhvc_page_mockups.js.');
}

const APP_SHORTCUTS=[
  {href:'#hub',label:'HHVC topic'},
  {href:'#topic',label:'Housing conditions'},
  {href:'#report',label:'Report a concern'},
  {href:'#search',label:'Search records'},
  {href:'#pay',label:'Pay fee'},
  {href:'#deadbird',label:'Report a dead bird'}
];

const LEGEND_ITEMS=[
  {color:'#0F6E56',label:'Topic landing'},
  {color:'#0F6E56',label:'Topic and Information'},
  {color:'#185FA5',label:'Transaction'},
  {color:'#854F0B',label:'Transaction, Data story, and Resource collection'},
  {color:'#993C1D',label:'Transaction'},
  {color:'#993556',label:'Transaction'},
  {color:'#3B6D11',label:'Transaction'}
];

class HhvcAppTop extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`
      <header class="app-top">
        <div class="app-top-row">
          <span class="app-top-title">HHVC SF.gov — Page Mockups &amp; Component System</span>
          <span class="app-top-meta">22 pages · Version 2</span>
        </div>
        <div class="app-top-row app-shortcuts" aria-label="Primary pages">
          ${APP_SHORTCUTS.map((shortcut)=>`<a class="app-shortcut" href="${shortcut.href}">${shortcut.label}</a>`).join('')}
        </div>
      </header>`;
  }
}

class HhvcLegendBar extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`
      <div class="legend">
        ${LEGEND_ITEMS.map((item)=>`<div class="legend-item"><div class="legend-dot" style="background:${item.color}"></div>${item.label}</div>`).join('')}
        <div style="flex:1"></div>
        <div class="type-ref">
          <div class="type-ref-label">Component types</div>
          <select class="type-ref-select" id="componentTypeRef" aria-label="Component type reference"></select>
        </div>
        <div style="font-size:10px;color:#888780">Component labels and type chips use Karl Help Center component names and link directly to their guidance pages.</div>
      </div>`;
  }
}

class HhvcAppStage extends HTMLElement{
  connectedCallback(){
    this.innerHTML=`<div class="nav-bar" id="nav"></div><div class="mockup-area" id="mockup"></div>`;
  }
}

customElements.define('hhvc-app-top',HhvcAppTop);
customElements.define('hhvc-legend-bar',HhvcLegendBar);
customElements.define('hhvc-app-stage',HhvcAppStage);

let current='hub';

function render(){
  const p=HHVC_PAGES.find(x=>x.id===current);
  const pageType=HHVC_PAGE_TYPES[p.id] || 'Information';
  const pageTypeDocUrl=getPageTypeDocUrl(pageType);
  const typedMarkup=p.render().replace(/<span class="comp-label(?: ([^"]+))?"([^>]*)>([^<]+)<\/span>/g,(match,labelClass,labelAttrs,labelText)=>{
    const finalClass=labelClass ? `comp-label ${labelClass}` : 'comp-label';
    const componentType=getComponentType(labelText);
    const componentDocUrl=getComponentDocUrl(componentType,labelText);
    const normalizedLabel=normalizeComponentLabel(labelText,componentType);
    const cleanAttrs=(labelAttrs || '').replace(/\s*style="([^"]*)"/, '');
    const styleMatch=(labelAttrs || '').match(/\s*style="([^"]*)"/);
    const mergedStyle=styleMatch ? ` style="${styleMatch[1]}"` : '';
    return `<div class="comp-label-wrap"><a class="${finalClass} comp-label-link" href="${componentDocUrl}" target="_blank" rel="noopener noreferrer"${mergedStyle}${cleanAttrs}>${normalizedLabel}</a>${renderComponentTypeLink(componentType,componentDocUrl)}</div>`;
  });
  document.getElementById('mockup').innerHTML=`
    <div class="page-title">
      <span style="font-family:monospace;font-size:12px">${p.url}</span>
      <span class="role-pill" style="background:${p.roleColor}">${pageType}</span>
      <a class="type-pill" href="${pageTypeDocUrl}" target="_blank" rel="noopener noreferrer">${pageType}</a>
      <button class="guide-toggle" id="guideToggle" type="button" aria-expanded="false">Show Karl build guide</button>
    </div>
    <div class="karl-guide" id="karlGuide" hidden></div>
    <div class="mock-page">
      <div class="mock-chrome"><div class="mock-dot"></div><div class="mock-dot"></div><div class="mock-dot"></div><div class="mock-url">${p.url}</div></div>
      <div class="mock-body">${typedMarkup}</div>
    </div>
    <div style="text-align:center;font-size:11px;color:#888780;margin-top:8px">HHVC SF.gov Page Mockups · ${p.label} · Component labels shown in color</div>`;
  try{
    initKarlGuide(pageType,p.label);
  }catch(error){
    const panel=document.getElementById('karlGuide');
    const button=document.getElementById('guideToggle');
    if(panel){
      panel.innerHTML='<div class="guide-title">Karl CMS build guide</div><div class="guide-subtitle">Guide temporarily unavailable for this page. The mockup still renders normally.</div>';
      panel.removeAttribute('hidden');
    }
    if(button){
      button.setAttribute('hidden','');
    }
    console.error('Karl guide failed to initialize',error);
  }
  initAccordions();
}

function initKarlGuide(pageType,pageLabel){
  const button=document.getElementById('guideToggle');
  const panel=document.getElementById('karlGuide');
  if(!button || !panel) return;

  try{
    renderKarlGuide(panel,pageType,pageLabel);
  }catch(error){
    panel.dataset.guideText='';
    panel.innerHTML='<div class="guide-title">Karl CMS build guide</div><div class="guide-subtitle">Guide generation failed for this page. Try another page or refresh.</div>';
    throw error;
  }

  button.addEventListener('click',()=>{
    const isOpen=!panel.hasAttribute('hidden');
    if(isOpen){
      panel.setAttribute('hidden','');
      button.textContent='Show Karl build guide';
      button.setAttribute('aria-expanded','false');
      return;
    }
    panel.removeAttribute('hidden');
    button.textContent='Hide Karl build guide';
    button.setAttribute('aria-expanded','true');
  });

  const copyButton=document.getElementById('guideCopyAll');
  if(copyButton){
    copyButton.addEventListener('click',async ()=>{
      const guideText=panel.dataset.guideText || '';
      if(!guideText.trim()) return;
      try{
        await navigator.clipboard.writeText(guideText);
        copyButton.textContent='Copied';
      }catch(error){
        copyButton.textContent='Copy failed';
      }
      setTimeout(()=>{
        copyButton.textContent='Copy all section text';
      },1200);
    });
  }
}

function renderKarlGuide(panel,pageType,pageLabel){
  const sections=Array.from(document.querySelectorAll('.mock-body .comp')).map((section,index)=>{
    const labelNode=section.querySelector('.comp-label-link, .comp-label');
    const label=labelNode ? labelNode.textContent.trim() : `Section ${index+1}`;
    const typeNode=section.querySelector('.comp-type');
    const componentType=typeNode ? typeNode.textContent.trim() : 'Body, Main body, Text and title';
    const text=buildKarlSectionGuide(section,componentType);
    return {label,componentType,text};
  });

  const compiledGuide=[
    `Page: ${pageLabel}`,
    `Karl content type: ${pageType}`,
    ''
  ].concat(sections.map((section)=>`${section.label}\nComponent type: ${section.componentType}\n${section.text || 'No draft text found.'}`)).join('\n\n');

  panel.dataset.guideText=compiledGuide;
  panel.innerHTML=`
    <div class="guide-header">
      <div class="guide-title">Karl CMS build guide</div>
      <button class="guide-copy" id="guideCopyAll" type="button">Copy all section text</button>
    </div>
    <div class="guide-subtitle">Use this as draft text for each matching component while building in Karl.</div>
    ${sections.map((section,index)=>`<details class="guide-item"${index===0 ? ' open' : ''}><summary>${escapeHtml(section.label)} - ${escapeHtml(section.componentType)}</summary><pre class="guide-text">${escapeHtml(section.text || 'No draft text found.')}</pre></details>`).join('')}`;
}

function extractGuideTextFromSection(section){
  const clone=section.cloneNode(true);
  clone.querySelectorAll('.comp-label-wrap,.comp-label,.comp-type').forEach((node)=>node.remove());

  clone.querySelectorAll('input').forEach((input)=>{
    const replacement=document.createElement('div');
    replacement.textContent=input.placeholder ? `Field: ${input.placeholder}` : 'Field';
    input.replaceWith(replacement);
  });

  clone.querySelectorAll('textarea').forEach((textarea)=>{
    const replacement=document.createElement('div');
    replacement.textContent=textarea.placeholder ? `Field: ${textarea.placeholder}` : 'Field';
    textarea.replaceWith(replacement);
  });

  clone.querySelectorAll('select').forEach((select)=>{
    const replacement=document.createElement('div');
    const options=Array.from(select.options).map((option)=>option.textContent.trim()).filter(Boolean);
    replacement.textContent=options.length ? `Options: ${options.join(' | ')}` : 'Options';
    select.replaceWith(replacement);
  });

  clone.querySelectorAll('button').forEach((button)=>{
    const replacement=document.createElement('div');
    const label=button.textContent.trim();
    replacement.textContent=label ? `Button: ${label}` : 'Button';
    button.replaceWith(replacement);
  });

  return normalizeGuideText(clone.innerText || '');
}

function buildKarlSectionGuide(section,componentType){
  const headingText=firstText(section,'.mock-h1,.mock-section-head,.mock-task-title,.mock-cost-head,.mock-media-title,.resp-col-head');
  const bodyText=extractGuideTextFromSection(section);
  const alertText=firstText(section,'.mock-alert-text');
  const noticeText=firstText(section,'.notice-text');
  const ctaText=firstText(section,'.mock-cta-text');
  const buttonTexts=textList(section,'.mock-cta-btn,.mock-submit,.mock-extern-btn,button');
  const linkTexts=textList(section,'.mock-rel-link,.topic-item,.mock-link-card,.mock-task-link,a');
  const listItems=textList(section,'li,.resp-item,.mock-sign-item');
  const accordionHeads=textList(section,'.mock-accordion .mock-acc-head');
  const mediaTitles=textList(section,'.mock-media-title,.mock-video-player,.mock-diagram-step');
  const formFields=extractFormFields(section);

  switch(componentType){
    case 'Title':
      return [
        formatField('Title',firstText(section,'.mock-h1') || headingText),
        formatField('Description',firstText(section,'.mock-purpose'))
      ].join('\n');
    case 'Alert':
      return [
        formatField('Description',alertText || noticeText || bodyText),
        formatField('Expiration date (optional)','TBD')
      ].join('\n');
    case 'Button':
      return [
        formatField('Choose SF.gov or external link',linkTexts[0] || 'TBD'),
        formatField('Link text',buttonTexts[0]),
        formatField('Screenreader label',ctaText || 'TBD')
      ].join('\n');
    case 'Accordions':
      return [
        formatField('Title of the Accordion section',headingText),
        formatField('Accordion sidebar',firstText(section,'.mock-purpose') || 'TBD'),
        formatListField('Accordion item title',accordionHeads),
        formatField('Body',bodyText)
      ].join('\n');
    case 'Related':
      return [
        formatField('Choose a page',linkTexts[0] || 'TBD'),
        formatListField('Related pages',linkTexts)
      ].join('\n');
    case 'Resources':
      return [
        formatField('Title (optional)',headingText || 'TBD'),
        formatField('Choose SF.gov page or External link',linkTexts[0] || 'TBD'),
        formatField('Title',headingText || firstText(section,'.mock-card div')),
        formatField('URL',linkTexts.find((value)=>value.startsWith('http')) || 'TBD'),
        formatField('Description',firstText(section,'.mock-task-desc,.mock-media-desc,.mock-cost-note') || bodyText),
        formatListField('Downloadable files',buttonTexts.filter((text)=>/pdf|download/i.test(text)))
      ].join('\n');
    case 'Contact section':
      return [
        formatField('Contact details',firstText(section,'.mock-contact') || bodyText)
      ].join('\n');
    case 'Topics':
      return [
        formatField('Section heading',headingText),
        formatListField('Topic links',textList(section,'.topic-item'))
      ].join('\n');
    case 'Images':
      return [
        formatField('Section heading',headingText),
        formatListField('Image captions/titles',mediaTitles.length ? mediaTitles : textList(section,'.mock-media-title,.mock-media-desc'))
      ].join('\n');
    case 'Videos':
      return [
        formatField('Video title',firstText(section,'.mock-video-player') || headingText),
        formatField('Describe what this video is about',firstText(section,'.mock-video-meta') || bodyText),
        formatField('Video type','Embed or External link'),
        formatField('Youtube URL','TBD'),
        formatField('Video transcript','TBD'),
        formatField('URL','TBD'),
        formatField('Link text description','TBD')
      ].join('\n');
    case 'PDFs and other documents':
      return [
        formatField('Document',headingText || firstText(section,'.mock-card span')),
        formatField('Title',headingText || firstText(section,'.mock-card span'))
      ].join('\n');
    case 'Links':
      return [
        formatField('Section heading',headingText),
        formatListField('Link text',linkTexts)
      ].join('\n');
    case 'Cost':
      return [
        formatField('Add Cost',firstText(section,'.mock-cost-head') || headingText),
        formatField('Cost description',firstText(section,'.mock-cost-note') || bodyText),
        formatField('Table content',normalizeGuideText(textFrom(section,'.mock-table')))
      ].join('\n');
    case 'Data':
      return [
        formatField('Data',headingText || firstText(section,'.mock-data-head')),
        formatListField('KPI labels',textList(section,'.mock-kpi-label')),
        formatListField('KPI values',textList(section,'.mock-kpi-value')),
        formatField('Chart/notes',firstText(section,'.mock-chart') || bodyText)
      ].join('\n');
    case 'Partner agency':
      return [
        formatField('Partner agency summary',bodyText)
      ].join('\n');
    case 'Body, Main body, Text and title':
      return [
        formatField('Section heading',headingText),
        formatField('Main text',noticeText || bodyText),
        formatListField('List or step text',listItems),
        formatListField('Form fields',formFields)
      ].join('\n');
    default:
      return [
        formatField('Section text',bodyText)
      ].join('\n');
  }
}

function firstText(section,selector){
  const node=section.querySelector(selector);
  return node ? normalizeGuideText(node.textContent || '') : '';
}

function textFrom(section,selector){
  const node=section.querySelector(selector);
  return node ? node.innerText || '' : '';
}

function textList(section,selector){
  const seen=new Set();
  return Array.from(section.querySelectorAll(selector))
    .map((node)=>normalizeGuideText(node.textContent || ''))
    .filter((text)=>text && text !== '+' && text !== '−')
    .filter((text)=>{
      if(seen.has(text)) return false;
      seen.add(text);
      return true;
    });
}

function extractFormFields(section){
  const fields=[];
  section.querySelectorAll('.mock-form-label').forEach((labelNode)=>{
    const fieldLabel=normalizeGuideText(labelNode.textContent || 'Field');
    const control=labelNode.nextElementSibling;
    if(!control){
      fields.push(fieldLabel);
      return;
    }

    if(control.matches('input,textarea')){
      const placeholder=control.getAttribute('placeholder') || '';
      fields.push(placeholder ? `${fieldLabel} (${placeholder})` : fieldLabel);
      return;
    }

    if(control.matches('select')){
      const options=Array.from(control.options).map((option)=>option.textContent.trim()).filter(Boolean);
      fields.push(options.length ? `${fieldLabel} [${options.join(' | ')}]` : fieldLabel);
      return;
    }

    fields.push(fieldLabel);
  });
  return fields;
}

function formatField(label,value){
  return `${label}: ${value && value.trim() ? value : 'TBD'}`;
}

function formatListField(label,items){
  if(!items || !items.length) return `${label}: TBD`;
  return `${label}:\n- ${items.join('\n- ')}`;
}

function normalizeGuideText(text){
  const safeText=String(text || '');
  return safeText
    .replace(/\u00a0/g,' ')
    .replace(/\s+\n/g,'\n')
    .replace(/\n\s+/g,'\n')
    .replace(/[ \t]{2,}/g,' ')
    .replace(/\s\+$/gm,'')
    .replace(/\n{3,}/g,'\n\n')
    .trim();
}

function escapeHtml(value){
  const safeValue=String(value || '');
  return safeValue
    .replace(/&/g,'&amp;')
    .replace(/</g,'&lt;')
    .replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;')
    .replace(/'/g,'&#39;');
}

function initAccordions(){
  document.querySelectorAll('.mock-accordion').forEach((accordion)=>{
    const head=accordion.querySelector('.mock-acc-head');
    const body=accordion.querySelector('.mock-acc-body');
    if(!head || !body) return;

    head.setAttribute('role','button');
    head.setAttribute('tabindex','0');

    const setOpen=(open)=>{
      accordion.classList.toggle('open',open);
      head.setAttribute('aria-expanded',open ? 'true' : 'false');
      const icon=head.querySelector('span');
      if(icon) icon.textContent=open ? '−' : '+';
    };

    const toggle=()=>setOpen(!accordion.classList.contains('open'));
    setOpen(false);

    head.addEventListener('click',toggle);
    head.addEventListener('keydown',(event)=>{
      if(event.key==='Enter' || event.key===' '){
        event.preventDefault();
        toggle();
      }
    });
  });
}

function buildTypeReference(){
  const select=document.getElementById('componentTypeRef');
  if(!select) return;
  select.innerHTML=['<option value="">Reference only</option>'].concat(HHVC_COMPONENT_TYPES.map(type=>`<option value="${type}">${type}</option>`)).join('');
}

function pageLink(pageId, text, className='mock-rel-link'){
  return `<a class="${className}" href="#${pageId}" data-page="${pageId}">${text}</a>`;
}

function topicTile(pageId, title, category){
  return `<a class="topic-item" href="#${pageId}" data-page="${pageId}"><div class="topic-cat">${category}</div>${title}</a>`;
}

function taskCard(pageId, title, description, linkText){
  return `<a class="mock-task-card mock-link-card" href="#${pageId}" data-page="${pageId}"><div class="mock-task-title">${title}</div><div class="mock-task-desc">${description}</div><div class="mock-task-link">${linkText}</div></a>`;
}

function ctaLink(pageId, text, style=''){
  return `<a class="mock-cta-btn" href="#${pageId}" data-page="${pageId}"${style ? ` style="${style}"` : ''}>${text}</a>`;
}

function externalLink(url, text, icon='↗'){
  return `<a class="mock-extern-btn" href="${url}" target="_blank" rel="noopener noreferrer">${text} <span style="font-size:16px">${icon}</span></a>`;
}

function mediaCard(title, description, thumb='Image example'){
  return `<div class="mock-media-card"><div class="mock-media-thumb">${thumb}</div><div class="mock-media-body"><div class="mock-media-title">${title}</div><div class="mock-media-desc">${description}</div></div></div>`;
}

function mediaVideo(title, length='60-90 sec', note='Includes captions and transcript'){
  return `<div class="mock-video-card"><div class="mock-video-player">Video preview: ${title}</div><div class="mock-video-meta"><span>Length: ${length}</span><span>${note}</span></div><div style="font-size:11px;margin-top:6px;color:#185FA5;text-decoration:underline;cursor:pointer">View video transcript</div></div>`;
}

function mediaDiagram(stepOne, stepTwo, stepThree){
  return `<div class="mock-diagram"><div class="mock-diagram-row"><div class="mock-diagram-step">${stepOne}</div><div class="mock-diagram-arrow">→</div><div class="mock-diagram-step">${stepTwo}</div><div class="mock-diagram-arrow">→</div><div class="mock-diagram-step">${stepThree}</div></div><div style="font-size:10px;color:#5f5e5a;margin-top:8px;padding-top:8px;border-top:1px solid #e5e5e5"><strong>Text alternative for screen readers:</strong> 1. ${stepOne} 2. ${stepTwo} 3. ${stepThree}</div></div>`;
}

function renderComponentTypeLink(type,href){
  return `<a class="comp-type" href="${href}" target="_blank" rel="noopener noreferrer">${type}</a>`;
}

function getComponentDocUrl(type,labelText){
  const docsRoot='https://sfdigitalservices.gitbook.io/karl-sf.gov-editor-help-center/using-karl-the-cms/components';
  const typeDocs={
    'Accordions':`${docsRoot}/accordions`,
    'Address':`${docsRoot}/address`,
    'Alert':'https://sfdigitalservices.gitbook.io/karl-sf.gov-editor-help-center/using-karl-the-cms/components/alert',
    'Body, Main body, Text and title':`${docsRoot}/body-main-body-text-and-title`,
    'Button':`${docsRoot}/button`,
    'Callout':`${docsRoot}/callout`,
    'Contact section':`${docsRoot}/contact-section`,
    'Cost':`${docsRoot}/cost`,
    'Data':`${docsRoot}/data`,
    'Description':`${docsRoot}/description`,
    'Heading':`${docsRoot}/heading/create-a-logical-reading-order`,
    'Images':`${docsRoot}/images`,
    'Links':`${docsRoot}/links`,
    'Partner agency':`${docsRoot}/partner-agency`,
    'PDFs and other documents':`${docsRoot}/pdfs-and-other-documents`,
    'People section':`${docsRoot}/people-section`,
    'Primary agency':`${docsRoot}/primary-agency`,
    'Redirect this page to':`${docsRoot}/redirect-this-page-to`,
    'Related':`${docsRoot}/related`,
    'Resources':`${docsRoot}/resources`,
    'Spotlight':`${docsRoot}/spotlight`,
    'Tables':`${docsRoot}/tables`,
    'Title':`${docsRoot}/title`,
    'Topics':`${docsRoot}/topics`,
    'URLs':`${docsRoot}/urls`,
    'Videos':`${docsRoot}/videos`
  };
  return typeDocs[type] || docsRoot;
}

function getPageTypeDocUrl(pageType){
  const docsRoot='https://sfdigitalservices.gitbook.io/karl-sf.gov-editor-help-center/using-karl-the-cms/content-types/building-a-page-by-content-type';
  const typeDocs={
    'About':`${docsRoot}/about`,
    'Agency':`${docsRoot}/agency`,
    'Campaign':`${docsRoot}/campaign`,
    'Data story':`${docsRoot}/data-story`,
    'Event':`${docsRoot}/event`,
    'Information':`${docsRoot}/information`,
    'Location':`${docsRoot}/location`,
    'Meeting':`${docsRoot}/meeting`,
    'News':`${docsRoot}/news`,
    'Profile':`${docsRoot}/profile`,
    'Report':`${docsRoot}/report`,
    'Resource collection':`${docsRoot}/resource-collection`,
    'Step by step':`${docsRoot}/step-by-step/steps`,
    'Topic':`${docsRoot}/topic`,
    'Transaction':`${docsRoot}/transaction`
  };
  return typeDocs[pageType] || 'https://sfdigitalservices.gitbook.io/karl-sf.gov-editor-help-center/using-karl-the-cms/content-types/choosing-a-content-type';
}

function getComponentType(labelText){
  const label=labelText.toLowerCase();
  if(label.includes('partner agency')) return 'Partner agency';
  if(label.includes('spotlight')) return 'Spotlight';
  if(label.includes('image')) return 'Images';
  if(label.includes('video')) return 'Links';
  if(label.includes('diagram')) return 'Images';
  if(label.includes('page purpose')) return 'Title';
  if(label.includes('links to service pages')) return 'Links';
  if(label.includes('links:')) return 'Links';
  if(label.includes('key message')) return 'Body, Main body, Text and title';
  if(label.includes('resource links')) return 'Resources';
  if(label.includes('needs-based task cards')) return 'Callout';
  if(label.includes('topic navigation grid')) return 'Topics';
  if(label.includes('ngss alignment table') || label.includes('ngss alignment')) return 'Body, Main body, Text and title';
  if(label.includes('field services link')) return 'Links';
  if(label.includes('data component')) return 'Data';
  if(label.includes('signs of a problem')) return 'Body, Main body, Text and title';
  if(label.includes('what to do now')) return 'Body, Main body, Text and title';
  if(label.includes('responsibility split')) return 'Body, Main body, Text and title';
  if(label.includes('primary cta')) return 'Button';
  if(label.includes('what happens next')) return 'Body, Main body, Text and title';
  if(label.includes('alert')) return 'Alert';
  if(label.includes('request form')) return 'Body, Main body, Text and title';
  if(label.includes('search form')) return 'Body, Main body, Text and title';
  if(label.includes('fee schedule') || label.includes('cost')) return 'Cost';
  if(label.includes('program description')) return 'Body, Main body, Text and title';
  if(label.includes('what a survey includes')) return 'Body, Main body, Text and title';
  if(label.includes('what to do (numbered steps)')) return 'Body, Main body, Text and title';
  if(label.includes('visit description + eligibility')) return 'Body, Main body, Text and title';
  if(label.includes('grouped resource sections')) return 'Resources';
  if(label.includes('download')) return 'PDFs and other documents';
  if(label.includes('faq')) return 'Accordions';
  if(label.includes('practical detail')) return 'Accordions';
  if(label.includes('related services') || label.includes('related links')) return 'Related';
  if(label.includes('contact block') || label.includes('contact section')) return 'Contact section';
  if(label.includes('detail section')) return 'Body, Main body, Text and title';
  if(label.includes('what to report')) return 'Body, Main body, Text and title';
  if(label.includes('c2 — visit description')) return 'Body, Main body, Text and title';
  return 'Body, Main body, Text and title';
}

function normalizeComponentLabel(labelText,componentType){
  const token=labelText.match(/^(C\d+)\s+[—-]\s+/);
  if(token) return `${token[1]} — ${componentType}`;
  return componentType;
}

function buildNav(){
  const nav=document.getElementById('nav');
  Object.entries(HHVC_GROUPS).forEach(([gid,g])=>{
    const grp=document.createElement('div');
    grp.className='nav-group';
    grp.innerHTML=`<div class="nav-label">${g.label}</div><div class="nav-btns">${g.pages.map(pid=>{const p=HHVC_PAGES.find(x=>x.id===pid);return`<a class="nbtn ${gid}" id="btn-${pid}" href="#${pid}" data-page="${pid}">${p.label}</a>`;}).join('')}</div>`;
    nav.appendChild(grp);
  });
}

function setPage(id){
  current=id;
  document.querySelectorAll('.nbtn').forEach(b=>b.classList.remove('active'));
  const btn=document.getElementById('btn-'+id);
  if(btn)btn.classList.add('active');
  render();
}

function setPageFromHash(){
  const hash=window.location.hash.replace('#','');
  const target=HHVC_PAGES.some(page=>page.id===hash) ? hash : 'hub';
  setPage(target);
}

function initHelpCenterLinkRouting(){
  document.addEventListener('click',(event)=>{
    const link=event.target.closest('a.comp-type, a.type-pill, a.comp-label-link');
    if(!link) return;

    const href=link.getAttribute('href') || '';
    if(!/^https?:\/\//i.test(href)) return;

    event.preventDefault();
    event.stopPropagation();

    const popup=window.open(href,'_blank','noopener,noreferrer');
    if(!popup){
      window.location.href=href;
    }
  });
}

window.addEventListener('hashchange',setPageFromHash);

buildNav();
buildTypeReference();
initHelpCenterLinkRouting();
if(!window.location.hash) window.location.hash='#hub';
setPageFromHash();
