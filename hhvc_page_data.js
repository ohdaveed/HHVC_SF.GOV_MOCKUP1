const PAGES=[
  {id:'hub',label:'Topic: Healthy housing and vector control',group:'topics',role:'Topic & Information',roleColor:'#0F6E56',url:'sf.gov/topics/healthy-housing-and-vector-control',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page title</span>
      <div class="mock-h1">Healthy housing and vector control</div>
      <div class="mock-purpose">Information about housing health problems in San Francisco, pest and vector control, and how to report concerns.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — services</span>
      <div class="mock-card-grid">
        ${taskCard('topic','I want to report an infestation','Learn what to do and how to report it','Read guidance →')}
        ${taskCard('violationnotice','I received a notice of violation','Understand what is required and how to respond','Review next steps →')}
        ${taskCard('pay','I need to pay a fee','Pay the annual inspection program fee','Pay the fee →')}
        ${taskCard('search','Search complaints and violations','Look up inspection records for a property','View records →')}
      </div>
      ${taskCard('deadbird','Report a dead bird','Report dead birds to help track West Nile Virus in California','Open reporting page →')}
      ${taskCard('complaintsdata','View complaint data dashboard','See complaint volume, complaint types, and response trends','Open dashboard →')}
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — spotlight: seasonal prevention</span>
      <div class="mock-card" style="background:#EAF3DE">
        ${mediaCard('Seasonal spotlight','Check homes and shared areas for standing water this week to reduce mosquito breeding.','Spotlight image placeholder')}
        <div class="mock-cta" style="background:#EAF3DE;margin-top:6px"><span class="mock-cta-text" style="color:#23480b">Prevent mosquitoes this week</span>${ctaLink('mosquitoes','See prevention checklist','background:#3B6D11')}</div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c4">C4 — body text: about this topic</span>
      <div class="mock-card">The City responds to complaints involving pests, rodents, mosquitoes, mold, and sanitation issues in multi-unit housing. Learn about common housing conditions, prevention guidance, and requirements when violations are found.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — related topics and resources</span>
      <div class="mock-related">
        <a class="mock-rel-link" href="https://sf.gov/departments/department-building-inspection" target="_blank" rel="noopener noreferrer">Building Inspection</a>
        <a class="mock-rel-link" href="https://sf.gov/departments/department-public-health" target="_blank" rel="noopener noreferrer">Department of Public Health</a>
        <a class="mock-rel-link" href="https://sf311.org" target="_blank" rel="noopener noreferrer">311 - General requests</a>
      </div>
    </div>`},

  {id:'topic',label:'Healthy housing conditions',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/healthy-housing-conditions',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Healthy housing conditions</div>
      <div class="mock-purpose">Find information about common housing health problems in San Francisco, what to do, and how to report conditions that are not being corrected.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — resource links</span>
      <div class="mock-section-head" style="margin-bottom:8px">Pests and vectors</div>
      <div class="topic-grid">${[['rodents','Rodents'],['cockroaches','Cockroaches'],['bedbugs','Bed bugs'],['flies','Flies'],['mosquitoes','Mosquitoes'],['pigeons','Pigeons'],['fleas','Fleas'],['poisonoak','Poison oak']].map(([pageId,title])=>topicTile(pageId,title,'Pest')).join('')}</div>
      <div class="mock-section-head" style="margin:10px 0 8px">Sanitation and structural</div>
      <div class="topic-grid">${[['garbage','Garbage / refuse'],['animalwaste','Animal waste'],['vegetation','Overgrown vegetation'],['mold','Mold growth'],['excessive','Excessive materials'],['unsanitary','Unsanitary conditions']].map(([pageId,title])=>topicTile(pageId,title,'Sanitation')).join('')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — images: topic examples</span>
      <div class="mock-media-grid">
        ${mediaCard('Examples: pests and vectors','Photos to help residents identify rodents, bed bugs, and mosquitoes.','Photo examples')}
        ${mediaCard('Examples: sanitation and structure','Photos to help residents spot mold, refuse, and overgrowth around buildings.','Photo examples')}
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — spotlight: report a concern</span>
      <div class="mock-card" style="background:#e6f1fb">
        ${mediaCard('Need to report a building concern?','Use the reporting form if your landlord or manager has not corrected a problem.','Spotlight image placeholder')}
        <div class="mock-cta" style="margin-top:6px"><span class="mock-cta-text">Report a pest or sanitation problem</span>${ctaLink('report','Report now')}</div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('search','Search complaints')}${pageLink('resources','Resources')}</div>
    </div>`},

  {id:'violationnotice',label:'Notice of violation',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/notice-of-violation-next-steps',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Notice of violation: what to do next</div>
      <div class="mock-purpose">Use this page if HHVC found health code violations at your property. It explains what to fix, what happens at reinspection, and what comes next if violations are not corrected.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — key message</span>
      <div class="mock-notice"><div class="notice-text">An inspector found health code violations. Your notice lists what must be fixed and when.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c3">C3 — corrective actions</span>
      <div class="mock-card"><ul class="mock-list"><li>Read each violation and deadline on your notice</li><li>Fix every listed condition by the deadline</li><li>Keep receipts, photos, and pest control reports to show what you fixed</li><li>Let the inspector inside to check the problem</li><li>For properties in the HHVC inspection fee program, the first reinspection is covered. Reinspection fees may apply starting with the second reinspection (Sec. 609.1(c)).</li></ul></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — reinspection and confirmation</span>
      <div class="mock-process">
        <div class="mock-proc-step"><span class="proc-num">1</span><div class="proc-text"><strong>Corrections reviewed</strong> — HHVC reviews your response and documentation.</div></div>
        <div class="mock-proc-step"><span class="proc-num">2</span><div class="proc-text"><strong>Inspector returns</strong> — A follow-up visit confirms whether violations have been resolved.</div></div>
        <div class="mock-proc-step"><span class="proc-num">3</span><div class="proc-text"><strong>Case updated</strong> — If everything is corrected, the case can close. If not, HHVC may issue citations and move the case to a Director's Hearing.</div></div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — diagram: what happens next</span>
      ${mediaDiagram('Notice issued','Property is reinspected','If unresolved: fines or Director\'s Hearing')}
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — spotlight: avoid extra fees</span>
      <div class="mock-cta" style="background:#fff7ed"><span class="mock-cta-text" style="color:#92400e">Fix all listed violations before reinspection to help avoid added fees</span>${ctaLink('search','Check case status')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — if the owner does not fix the problem</span>
      <div class="mock-notice"><div class="notice-text">If the owner does not fix the problem, we can fine them or hold a hearing. Keep taking notes and report the problem again if it continues.</div></div>
      <div class="mock-card"><div class="mock-section-head">Next steps</div><ul class="mock-list"><li>Keep copies of your notice, photos, and communication records</li><li>Submit an updated complaint if conditions continue</li><li>Check case status in complaint and violation records</li><li>Call 311 for help reaching the right City service if conditions worsen</li></ul></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — links: report unresolved conditions</span>
      <div class="mock-related">${pageLink('report','Submit a complaint')}${pageLink('search','Check case status')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('search','Search complaints and violations')}${pageLink('report','Report a concern')}${pageLink('resources','Resources')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c9">C9 — legal details</span>
      <div style="font-size:10px;color:#888780">Legal references: Health Code Sec. 581, 596, 596.5, and 609.1.</div>
    </div>`},

  {id:'rodents',label:'Rodents',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/rodents-in-your-building',render:()=>pestPage('Rodents','Sec 581(b)(13)',['Droppings near food storage or walls','Gnaw marks on packaging or wood','Scratching sounds in walls or ceilings','Burrows near the foundation or yard','Grease rub marks along baseboards'],['Store all food in metal, glass, or hard plastic containers','Remove clutter and stored items from floors','Eliminate standing water','Report visible openings or holes'],['Keep the home clean and store food properly','Report activity immediately','Get the home ready for inspection or pest control'],['Seal all openings larger than 1/4 inch','Hire a professional pest control service','Repair structural defects and leaks'])},
  {id:'cockroaches',label:'Cockroaches',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/cockroaches-in-your-building',render:()=>pestPage('Cockroaches','Sec 581(b)(8)',['Small dark droppings near stove or cabinets','Live insects at night or when lights turn on','Egg casings in corners or behind appliances','Greasy smear marks along walls'],['Clean food residue and grease from surfaces daily','Store food in hard containers with tight lids','Fix dripping faucets and leaks under sinks','Seal cracks around pipes and baseboards'],['Keep the kitchen clean and wipe up grease','Store food properly','Report activity to owner by email, text, or letter'],['Arrange professional pest control','Seal structural cracks and crevices','Repair plumbing leaks'])},

  {id:'bedbugs',label:'Bed bugs',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/bed-bugs-in-your-building',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Bed bugs</div>
      <div class="mock-purpose">Learn how to identify bed bugs, avoid spreading them, and get help quickly.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — signs of a problem</span>
      <div class="mock-signs-grid">${['Bites in lines or clusters','Blood spots on sheets','Dark spotting on mattress seams','Live bugs or shed skins'].map(s=>`<div class="mock-sign-item"><span class="mock-sign-dot"></span>${s}</div>`).join('')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — images: what to look for</span>
      <div class="mock-media-grid">
        ${mediaCard('What spotting can look like','Example of dark spotting near mattress seams and tags.','Photo example')}
        ${mediaCard('Common signs near beds and furniture','Examples of shed skins and other signs around sleeping areas.','Photo example')}
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — key message</span>
      <div class="mock-notice"><div class="notice-text">Keep furniture, mattresses, and bedding in place until you report the problem. Moving infested items can spread bed bugs to new areas.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c3">C3 — what to do now</span>
      <div class="mock-card"><ul class="mock-list"><li>Report to your landlord right away by email, text, or letter</li><li>Do not move items between rooms</li><li>Contain items in sealed bags before disposal</li><li>Wash and dry affected fabrics on high heat</li></ul></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c4">C4 — responsibility split</span>
      <div class="resp-grid"><div class="resp-col"><div class="resp-col-head">Tenant</div><div class="resp-item">Report promptly in writing</div><div class="resp-item">Follow preparation instructions</div><div class="resp-item">Provide access for treatment</div></div><div class="resp-col"><div class="resp-col-head">Property owner</div><div class="resp-item">Arrange professional treatment</div><div class="resp-item">Have the whole building checked</div><div class="resp-item">Provide prep instructions</div></div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — links: report a concern</span>
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('mqsurvey','Request a mosquito survey')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-notice"><div class="notice-text">If activity is confirmed, treatment and preparation steps will be required. The property owner is generally responsible for arranging pest control.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — practical detail</span>
      <div class="mock-card"><div class="mock-section-head">How bed bugs spread</div><ul class="mock-list"><li>They move with luggage, clothing, and furniture.</li><li>They can spread room to room through shared walls and items.</li><li>Keep them in one place before pest control arrives.</li></ul></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c9">C9 — detail section</span>
      <div class="mock-card"><div class="mock-section-head">What treatment usually includes</div><ul class="mock-list"><li>Inspection of sleeping areas and nearby furniture</li><li>Preparation steps for the resident or owner</li><li>Follow-up treatment if activity continues</li></ul></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — video: room prep walkthrough</span>
      ${mediaVideo('How to prepare a room before treatment','60-90 sec')}
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — FAQ</span>
      <div class="mock-card" style="margin-bottom:4px"><div class="mock-task-title">Do I need to throw away my mattress?</div><div class="mock-task-desc">Usually no. Follow the preparation instructions you receive first.</div></div>
      <div class="mock-card"><div class="mock-task-title">Can bed bugs spread through walls?</div><div class="mock-task-desc">Yes. They can move through shared building spaces and items.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c12">C12 — download</span>
      <div class="mock-card" style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:12px;color:#1a1a18">Bed bug preparation checklist (PDF)</span><button style="font-size:11px;padding:4px 10px;border-radius:4px;border:1px solid #d3d1c7;background:#f5f4f0;cursor:pointer">Download</button></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('resources','Resources')}</div>
    </div>`},

  {id:'flies',label:'Flies',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/flies-sanitation-building',render:()=>pestPage('Flies and sanitation','Sec 581(b)(8)',['Large numbers of flies indoors or near garbage','Maggots or larvae in trash or drains','Fly spotting on walls or ceilings','Strong odor from waste or refuse area'],['Remove food waste and garbage promptly','Use containers with tightly fitting lids','Clean garbage bins including inside surfaces','Remove breeding material — do not rely on fly strips'],['Bag and contain waste properly','Close bin lids after use'],['Provide adequate containers with tight lids','Maintain and clean refuse areas'])},

  {id:'mosquitoes',label:'Mosquitoes',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/mosquitoes-standing-water',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Mosquitoes and standing water</div>
      <div class="mock-purpose">Learn how to find and eliminate mosquito breeding sources and when to report a problem.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — signs of a problem</span>
      <div class="mock-signs-grid">${['Standing water in containers or gutters','Larvae visible in containers','Clogged drains or pooled water','Repeated mosquito activity'].map(s=>`<div class="mock-sign-item"><span class="mock-sign-dot"></span>${s}</div>`).join('')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c3">C3 — what to do now</span>
      <div class="mock-card"><ul class="mock-list"><li>Dump all standing water from containers weekly</li><li>Empty saucers under potted plants</li><li>Cover or remove unused water-holding containers</li><li>Check and clear blocked gutters</li></ul></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — images: breeding sites</span>
      <div class="mock-media-grid">
        ${mediaCard('Containers that hold water','Examples of buckets, toys, and planters that collect water.','Photo example')}
        ${mediaCard('Places to check after rain','Examples of gutters, drains, and low spots to inspect.','Photo example')}
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — video: after-rain checklist</span>
      ${mediaVideo('What to check in the first 24 hours after rain','45-60 sec')}
    </div>
    <div class="comp"><span class="comp-label lbl-c4">C4 — responsibility split</span>
      <div class="resp-grid"><div class="resp-col"><div class="resp-col-head">Resident</div><div class="resp-item">Empty containers weekly</div><div class="resp-item">Remove clutter from outdoor areas</div></div><div class="resp-col"><div class="resp-col-head">Property owner</div><div class="resp-item">Maintain drainage systems</div><div class="resp-item">Correct drainage failures</div></div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — links: report a concern</span>
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('resources','Bed bug preparation checklist')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-notice"><div class="notice-text">Drainage failures that cannot be self-corrected may require property owner action following an inspection.</div></div>
    </div>
    <div class="field-link-box">
      <span class="comp-label" style="background:#993556;color:#fff">Field services link</span>
      <div class="mock-notice" style="margin-top:6px"><div class="notice-text">Still having a problem after eliminating standing water? HHVC can send a team to your property. ${pageLink('mqsurvey','Request a mosquito survey →')}</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — practical detail</span>
      <div class="mock-card"><div class="mock-section-head">Commonly missed breeding sites</div><div class="mock-task-desc">Check gutters, covered containers, saucers, and low points where water collects after rain.</div></div>
      <div class="mock-card"><div class="mock-section-head">What to do after rain</div><div class="mock-task-desc">Inspect the property within 24 hours and remove standing water from all containers and drainage points.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — FAQ</span>
      <div class="mock-card"><div class="mock-task-title">How much water does it take to breed mosquitoes?</div><div class="mock-task-desc">Very small amounts can be enough for breeding, so remove even small pools of standing water.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('mqsurvey','Request a mosquito survey')}${pageLink('report','Report a concern')}</div>
    </div>`},

  {id:'pigeons',label:'Pigeons',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/pigeons-bird-waste-building',
   render:()=>`
    ${pestPage('Pigeons and bird waste','Sec 581(b)(7)',['Accumulated droppings on ledges or roofs','Active nesting or roosting on building','Feathers in vents or common areas'],['Do not feed pigeons or other birds','Report waste accumulation to property manager'],['Stop feeding birds on the property','Report nesting or waste to owner'],['Remove droppings and nesting safely','Install safe bird deterrents like spikes or nets'])}
    <div class="comp"><span class="comp-label lbl-c7">C7 — key message</span>
      <div class="mock-notice"><div class="notice-text">Do not sweep large piles of dry droppings. You could breathe in harmful dust. Wet the area first or hire a professional.</div></div>
    </div>`},

  {id:'fleas',label:'Fleas',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/fleas-in-your-building',render:()=>pestPage('Fleas','Sec 581(b)(8)',['Bites on ankles and lower legs','Flea dirt in pet bedding or carpet','Pets scratching or grooming excessively','Jumping insects near floor level'],['Treat pets with veterinarian-recommended product','Vacuum all carpets and upholstered furniture','Wash all pet bedding and fabrics','Clean pet resting areas completely'],['Treat pet and environment simultaneously','Vacuum repeatedly over 2–4 weeks'],['Provide pest-free unit to new tenants','Address common-area infestations'])},
  {id:'poisonoak',label:'Poison oak',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/poison-oak-building',render:()=>pestPage('Poison oak','Sec 581(b)(11)',['Identifiable toxic plants in yard or lot','Three-leaf clusters, waxy appearance','Overgrowth in accessible areas'],['Avoid all contact','Do not attempt removal without protection','Report to property manager'],['Avoid contact, report to owner'],['Remove safely or hire licensed professional','Keep the plant from growing back where people can reach it'])},
  {id:'garbage',label:'Garbage / refuse',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/garbage-refuse-building',render:()=>pestPage('Garbage and refuse','Sec 581(b)(1)',['Accumulated trash or food waste','Overflowing bins or broken lids','Loose garbage on ground','Strong odor from refuse area'],['Place waste in proper sealed containers','Keep bin lids closed','Do not leave garbage on the ground'],['Bag waste properly','Use containers correctly, close lids'],['Provide adequate containers with tight lids','Maintain and clean refuse enclosures'])},
  {id:'animalwaste',label:'Animal waste',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/animal-waste-building',render:()=>pestPage('Animal waste','Sec 581(b)(1)(5)',['Visible feces in yard or common areas','Strong odor','Flies or pests attracted to waste area'],['Remove feces promptly','Clean and disinfect affected surfaces','Use appropriate protective equipment'],['Remove pet waste from personal areas','Report common-area accumulations'],['Remove accumulations from shared yards','Maintain common areas in sanitary condition'])},
  {id:'vegetation',label:'Overgrown vegetation',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/overgrown-vegetation-building',render:()=>pestPage('Overgrown vegetation','Sec 581(b)(2)',['Dense vegetation against building foundation','Inaccessible yard areas','Ground-level debris and wood piles','Concealed rodent burrows'],['Remove ground-level debris and stored materials','Clear access to foundation areas','Report overgrowth to property manager'],['Keep personal outdoor areas free of clutter'],['Trim vegetation away from structure','Remove debris from ground level','Clear paths so inspectors can check the building'])},
  {id:'mold',label:'Mold growth',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/mold-growth-building',
   render:()=>`
    ${pestPage('Mold growth','Sec 581(b)(6)',['Visible mold on walls, ceilings, or surfaces','Musty odor in rooms','Condensation on windows or cold walls','Water stains or discoloration'],['Report leaks to property owner immediately','Improve ventilation in bathrooms and kitchens','Wipe visible condensation promptly'],['Report leaks and moisture promptly','Run exhaust fans, open windows'],['Repair all plumbing and building envelope leaks','Improve ventilation where needed'])}
    <div class="comp"><span class="comp-label lbl-c3">C3 — partner agency</span>
      <div class="resp-grid">
        <div class="resp-col"><div class="resp-col-head" style="color:#0F6E56">HHVC handles</div><div class="resp-item">Visible mold and mildew conditions in housing</div><div class="resp-item">Unsanitary conditions related to moisture and habitability</div></div>
        <div class="resp-col"><div class="resp-col-head" style="color:#185FA5">Dept. of Building Inspection handles</div><div class="resp-item">Broken pipes and plumbing system failures</div><div class="resp-item">Faulty roofs or building defects causing water intrusion</div></div>
      </div>
      <div class="mock-notice"><div class="notice-text">If mold is caused by a broken pipe or faulty roof, report that structural issue to the Department of Building Inspection.</div></div>
    </div>`},
  {id:'excessive',label:'Excessive materials',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/excessive-materials-building',render:()=>pestPage('Excessive materials','Sec 581(b)(18)',['Too much clutter blocking paths','Items stored against all walls','Blocked pathways and exits'],['Remove extra stored items','Move items off the floor','Clear access to walls and baseboards'],['Keep the home clean enough to be inspected','Reduce clutter to allow pest control access'],['Notify tenant by email, text, or letter','Give the tenant time to fix the problem'])},
  {id:'unsanitary',label:'Unsanitary conditions',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/unsanitary-conditions-building',render:()=>pestPage('Unsanitary conditions','Sec 581(b)(4)',['Piles of trash or dirt','Dirty surfaces','Strong odors from uncleaned areas'],['Clean dirty areas completely','Remove trash and dirty items','Tell the owner about things they need to fix'],['Maintain unit in reasonably clean condition','Report broken pipes or leaks that cause messes'],['Keep shared areas clean','Fix building problems that cause dirt or waste to build up'])},

  {id:'report',label:'Report a concern',group:'report',role:'Report',roleColor:'#185FA5',url:'sf.gov/report-residential-building-concern',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Report a pest or sanitation problem</div>
      <div class="mock-purpose">Report a health or sanitation problem to the City. Only use this form if you already told your landlord and they did not fix it.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — spotlight: before you report</span>
      <div class="mock-cta" style="background:#e6f1fb"><span class="mock-cta-text" style="color:#0C447C">Before you submit, gather your address, photos, dates, and owner contact attempts</span>${ctaLink('search','Check existing records')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — key message: when to use this page</span>
      <div class="mock-notice"><div class="notice-text">Report to your property owner first. If the problem is not corrected, use this form to submit a complaint to the City.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — image: before you submit</span>
      ${mediaCard('Before you submit','Checklist: address, photos, dates, and who you contacted.','Checklist example')}
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — primary CTA (button to form service)</span>
      <div class="mock-card" style="text-align:center">
        <button class="mock-submit" style="background:#185FA5;width:auto;padding:10px 20px">Go to the reporting form</button>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-process">
        <div class="mock-proc-step"><span class="proc-num">1</span><div class="proc-text"><strong>Complaint reviewed</strong> — SFDPH reviews your complaint and decides if an inspection is needed.</div></div>
        <div class="mock-proc-step"><span class="proc-num">2</span><div class="proc-text"><strong>Inspection scheduled</strong> — An inspector may contact you and visit the property.</div></div>
        <div class="mock-proc-step"><span class="proc-num">3</span><div class="proc-text"><strong>Violations recorded</strong> — If the inspector finds problems, they will give the owner a notice to fix them.</div></div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('search','Search complaints')}${pageLink('topic','Healthy housing conditions')}</div>
    </div>`},

  {id:'search',label:'Search complaints',group:'records',role:'Records',roleColor:'#854F0B',url:'sf.gov/search-complaints-violations',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Search complaints and violations</div>
      <div class="mock-purpose">Look up complaint and inspection records for a residential property in San Francisco.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — primary CTA (button to search tool)</span>
      <div class="mock-card" style="text-align:center">
        <button class="mock-submit" style="background:#854F0B;width:auto;padding:10px 20px">Open the complaint search tool</button>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — image: address format example</span>
      ${mediaCard('Address format example','Use street number, street name, and unit number if available.','Search example')}
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — results area</span>
      <div class="mock-card" style="text-align:center;padding:20px 12px"><div style="font-size:12px;color:#888780">Search results will appear here</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('complaintsdata','Complaint data dashboard')}${pageLink('hub','Healthy housing and vector control')}</div>
    </div>`},

  {id:'pay',label:'Pay fee',group:'pay',role:'Pay',roleColor:'#993C1D',url:'sf.gov/vector-control-healthy-housing-fee',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Pay your Vector Control and Healthy Housing fee</div>
      <div class="mock-purpose">Owners of apartment and hotel properties in San Francisco must pay an annual fee. This fee supports the Vector Control and Healthy Housing Inspection Program.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — before you pay</span>
      <div class="mock-notice"><div class="notice-text">Before you pay, have your property address, number of units, and billing information ready.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — cost</span>
      <div class="mock-cost">
        <div class="mock-cost-head">Annual cost overview</div>
        <div class="mock-cost-note">The fee depends on building size. Use this page to confirm your amount and pay online.</div>
        <table class="mock-table"><thead><tr><th>Building type</th><th>Number of units</th><th>Annual fee</th></tr></thead><tbody><tr><td>Apartment / hotel</td><td>1–4 units</td><td>Confirm with SFDPH</td></tr><tr><td>Apartment / hotel</td><td>5–19 units</td><td>Confirm with SFDPH</td></tr><tr><td>Apartment / hotel</td><td>20+ units</td><td>Confirm with SFDPH</td></tr></tbody></table>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — diagram: fee lookup steps</span>
      ${mediaDiagram('Find your property type','Count units','Confirm fee and pay online')}
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — primary CTA</span>
      <div class="mock-cta" style="background:#faeeda"><span class="mock-cta-text" style="color:#633806">Pay your fee online</span><button class="mock-cta-btn" style="background:#854F0B">Pay now</button></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-notice"><div class="notice-text">If you do not pay the fee, the City may add late fees or place a lien on your property.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — need help</span>
      <div class="mock-card"><div class="mock-task-desc">Questions about your bill? Call (415) 252-3800 or email hhvc@sfdph.org.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — FAQ</span>
      <div class="mock-accordion mock-faq">
        <div class="mock-acc-head">Who is required to pay? <span>+</span></div>
        <div class="mock-acc-body"><p>Property owners of multi-unit residential buildings must pay the annual inspection program fee. The fee is based on the number of units at the property.</p></div>
      </div>
      <div class="mock-accordion mock-faq">
        <div class="mock-acc-head">What if I believe I was billed incorrectly? <span>+</span></div>
        <div class="mock-acc-body"><p>Contact HHVC if you think your bill is wrong. Call (415) 252-3800 or email hhvc@sfdph.org with your property address and details about the mistake. We'll review your account.</p></div>
      </div>
    </div>`},

  {id:'mqsurvey',label:'Request mosquito survey',group:'field',role:'Field service',roleColor:'#993556',url:'sf.gov/request-mosquito-survey',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Request a mosquito survey</div>
      <div class="mock-purpose">If you still have mosquitoes after you remove standing water, we can send a team to check and treat your property.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — what a survey includes</span>
      <div class="mock-card"><ul class="mock-list"><li>Check your property for places where mosquitoes breed</li><li>Look for signs of mosquito activity</li><li>Use safe treatments to kill mosquitoes if needed</li><li>Set traps to catch and track mosquitoes</li><li>Show you how to keep mosquitoes from coming back</li></ul></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — video: what to expect during a visit</span>
      ${mediaVideo('What happens during a mosquito survey visit','60-90 sec')}
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — key message</span>
      <div class="mock-notice"><div class="notice-text">If mosquitoes are still a problem after you remove standing water, request a mosquito survey. Start by emptying containers, saucers, and gutters.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — primary CTA (button to form service)</span>
      <div class="mock-card" style="text-align:center">
        <button class="mock-submit" style="background:#993556;width:auto;padding:10px 20px">Open the mosquito survey request form</button>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-process">
        <div class="mock-proc-step"><span class="proc-num" style="background:#FBEAF0;color:#993556">1</span><div class="proc-text"><strong>Request reviewed</strong> — HHVC will contact you to schedule a visit.</div></div>
        <div class="mock-proc-step"><span class="proc-num" style="background:#FBEAF0;color:#993556">2</span><div class="proc-text"><strong>Field visit</strong> — A team member will check your property and take action.</div></div>
        <div class="mock-proc-step"><span class="proc-num" style="background:#FBEAF0;color:#993556">3</span><div class="proc-text"><strong>Follow-up guidance</strong> — We will give you tips to keep mosquitoes away.</div></div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — image: field visit examples</span>
      <div class="mock-media-grid">
        ${mediaCard('Inspector checks standing water','Example of a field visit inspection for breeding sources.','Photo example')}
        ${mediaCard('Trap and treatment setup','Example of trap placement and treatment location notes.','Photo example')}
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('mosquitoes','Mosquitoes and standing water')}${pageLink('report','Report a concern')}</div>
    </div>`},

  {id:'deadbird',label:'Report a dead bird',group:'field',role:'Field service',roleColor:'#993556',url:'sf.gov/report-dead-bird',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Report a dead bird</div>
      <div class="mock-purpose">Dead birds — especially crows, ravens, and jays — can be a sign of West Nile Virus. You can report dead birds to the state online any time of year.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — key message</span>
      <div class="mock-notice"><div class="notice-text">Use gloves or a plastic bag turned inside out if you need to move the bird. Wash your hands thoroughly afterward.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — image: safe handling</span>
      ${mediaCard('How to handle safely','Image sequence: gloves, bagging, and hand washing.','Safety example')}
    </div>
    <div class="comp"><span class="comp-label lbl-c3">C3 — what to do (numbered steps)</span>
      <div class="mock-process">
        <div class="mock-proc-step"><span class="proc-num" style="background:#FBEAF0;color:#993556">1</span><div class="proc-text"><strong>Note the location</strong> — Write down the address or intersection where you found the bird.</div></div>
        <div class="mock-proc-step"><span class="proc-num" style="background:#FBEAF0;color:#993556">2</span><div class="proc-text"><strong>Report online</strong> — Submit your report at westnile.ca.gov. You will need your zip code.</div></div>
        <div class="mock-proc-step"><span class="proc-num" style="background:#FBEAF0;color:#993556">3</span><div class="proc-text"><strong>Prepare the bird</strong> — Place in a sealed bag labeled "Dead Bird" in a shaded area for pickup.</div></div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — primary CTA (external link)</span>
      ${externalLink('https://westnile.ca.gov','Report a dead bird at westnile.ca.gov')}
      <div style="font-size:12px;color:#5f5e5a;margin-top:4px">Prefer to call? West Nile Virus Call Center: 1-877-968-2473 (April–October)</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — what to report / not report</span>
      <div class="resp-grid">
        <div class="resp-col"><div class="resp-col-head" style="color:#059669">Report these birds</div><div class="resp-item">Crows, ravens, jays</div><div class="resp-item">Raptors and hawks</div><div class="resp-item">Found recently, no obvious cause</div></div>
        <div class="resp-col"><div class="resp-col-head" style="color:#dc2626">Do not report these</div><div class="resp-item">Injured or sick (still alive)</div><div class="resp-item">Clear signs of how it died (like being hit by a car)</div><div class="resp-item">Birds that have been dead for a long time</div></div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c9">C9 — images: report vs do not report</span>
      <div class="mock-media-grid">
        ${mediaCard('Report these birds','Crows, ravens, jays, and similar birds found recently.','Bird ID example')}
        ${mediaCard('Do not report these cases','Live birds, clear signs of trauma, or birds dead for a long time.','Bird ID example')}
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-notice"><div class="notice-text">The state reviews reports and decides if the bird should be picked up. Not all birds are collected. Your report helps the state track West Nile Virus.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — practical detail</span>
      <div class="mock-card"><div class="mock-section-head">How to protect yourself from West Nile Virus</div><div class="mock-task-desc">Avoid mosquito bites with repellent, long sleeves, and by removing standing water around your home.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('mosquitoes','Mosquitoes and standing water')}${pageLink('mqsurvey','Request a mosquito survey')}</div>
    </div>`},

  {id:'classroom',label:'Request classroom visit',group:'outreach',role:'Outreach',roleColor:'#3B6D11',url:'sf.gov/hhvc-education-visit',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Request a classroom or community visit</div>
      <div class="mock-purpose">We offer free mosquito education visits for San Francisco schools and science centers. Visits are for grades 2 through 12 and match California science standards.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — visit description + eligibility</span>
      <div class="mock-card"><ul class="mock-list"><li>Mosquito life cycle and breeding conditions</li><li>How to identify breeding sites in the neighborhood</li><li>Prevention steps for home and community</li><li>How the city controls pests</li></ul><div style="margin-top:8px;font-size:11px;color:#5f5e5a">Available to: any SF school (public, charter, private) · community science centers · community events · grades 2–12 · free of charge</div></div>
    </div>
    <div class="comp"><span class="comp-label" style="background:#3B6D11;color:#fff">C8 — body text: NGSS alignment</span>
      <div class="mock-card">
        <div style="font-size:11px;font-weight:500;color:#5f5e5a;margin-bottom:6px">California NGSS standards covered</div>
        <div class="mock-ngss-row"><span class="mock-ngss-grade">Grades 2–5</span><span class="mock-ngss-std">3-LS1-1, 5-LS2-1</span><span class="mock-ngss-topic">Life cycles · ecosystems</span></div>
        <div class="mock-ngss-row"><span class="mock-ngss-grade">Grades 6–8</span><span class="mock-ngss-std">MS-LS2-1, MS-ESS3-3</span><span class="mock-ngss-topic">Populations · human impact</span></div>
        <div class="mock-ngss-row"><span class="mock-ngss-grade">Grades 9–12</span><span class="mock-ngss-std">HS-LS2-2, HS-ESS3-4</span><span class="mock-ngss-topic">Population dynamics · solution design</span></div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — primary CTA (button to form service)</span>
      <div class="mock-card" style="text-align:center">
        <button class="mock-submit" style="background:#3B6D11;width:auto;padding:10px 20px">Open the education visit request form</button>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-process">
        <div class="mock-proc-step"><span class="proc-num" style="background:#EAF3DE;color:#3B6D11">1</span><div class="proc-text"><strong>HHVC will contact you</strong> within [X] business days to confirm availability.</div></div>
        <div class="mock-proc-step"><span class="proc-num" style="background:#EAF3DE;color:#3B6D11">2</span><div class="proc-text"><strong>Visit confirmed</strong> — We will confirm date, time, and which NGSS standards your visit covers.</div></div>
        <div class="mock-proc-step"><span class="proc-num" style="background:#EAF3DE;color:#3B6D11">3</span><div class="proc-text"><strong>Pre-visit materials sent</strong> if available.</div></div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c12">C12 — download</span>
      <div class="mock-card" style="display:flex;align-items:center;justify-content:space-between"><span style="font-size:12px;color:#1a1a18">NGSS standards alignment one-pager (PDF)</span><button style="font-size:11px;padding:4px 10px;border-radius:4px;border:1px solid #d3d1c7;background:#f5f4f0;cursor:pointer">Download</button></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('mosquitoes','Mosquitoes and standing water')}${pageLink('hub','Healthy housing and vector control')}<a class="mock-rel-link" href="https://www.cde.ca.gov/be/st/ss/">CA NGSS standards</a></div>
    </div>`},

  {id:'complaintsdata',label:'Complaint data',group:'records',role:'Records',roleColor:'#854F0B',url:'sf.gov/complaint-data-dashboard',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Complaint data dashboard</div>
      <div class="mock-purpose">See the number of complaints, the types of problems, and how fast we respond to cases in San Francisco.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — data component</span>
      <div class="mock-data-shell">
        <div class="mock-data-head"><span>Power BI dashboard</span><span>Last updated: monthly</span></div>
        <div class="mock-data-canvas">
          <div class="mock-kpi-grid">
            <div class="mock-kpi"><div class="mock-kpi-label">Total complaints</div><div class="mock-kpi-value">2,184</div></div>
            <div class="mock-kpi"><div class="mock-kpi-label">Top complaint type</div><div class="mock-kpi-value">Rodents</div></div>
            <div class="mock-kpi"><div class="mock-kpi-label">Median response time</div><div class="mock-kpi-value">5 days</div></div>
          </div>
          <div class="mock-chart">Interactive chart area: complaint type trends by month</div>
        </div>
      </div>
      <div class="mock-data-shell">
        <div class="mock-data-head"><span>Filtered state example</span><span>Date range: last 90 days</span></div>
        <div class="mock-data-canvas">
          <div class="mock-filter-row">
            <select class="mock-select" style="margin:0"><option>Date range: Last 90 days</option><option>Last 30 days</option><option>Year to date</option></select>
            <select class="mock-select" style="margin:0"><option>Complaint type: Rodents</option><option>Mold</option><option>Garbage / sanitation</option><option>All types</option></select>
            <select class="mock-select" style="margin:0"><option>District: All</option><option>District 1</option><option>District 2</option><option>District 3</option></select>
            <button class="mock-filter-btn">Apply</button>
          </div>
          <div class="mock-kpi-grid">
            <div class="mock-kpi"><div class="mock-kpi-label">Filtered complaints</div><div class="mock-kpi-value">412</div></div>
            <div class="mock-kpi"><div class="mock-kpi-label">Open cases</div><div class="mock-kpi-value">67</div></div>
            <div class="mock-kpi"><div class="mock-kpi-label">Median response time</div><div class="mock-kpi-value">4 days</div></div>
          </div>
          <div class="mock-chart">Interactive chart area: filtered complaint trend and category breakdown</div>
        </div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c7">C7 — data note</span>
      <div class="mock-notice"><div class="notice-text">We combine data to protect people's privacy. You can look up specific complaints using the records search.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — image: how to read this dashboard</span>
      ${mediaCard('How to read this dashboard','Image guide with callouts for filters, trend chart, and key numbers.','Dashboard guide')}
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('search','Search complaints and violations')}${pageLink('resources','Resources')}${pageLink('hub','Healthy housing and vector control')}</div>
    </div>`},

  {id:'resources',label:'Resources',group:'records',role:'Records',roleColor:'#854F0B',url:'sf.gov/healthy-housing-resources',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Resources</div>
      <div class="mock-purpose">Guides and handouts for residents, property owners, and teachers.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c12">C12 — PDFs and other documents</span>
      <div class="mock-section-head" style="margin-bottom:8px">Preparation checklists</div>
      ${[
        ['Bed bug treatment preparation checklist','Steps to prepare sleeping areas and protect belongings.'],
        ['Flea treatment preparation checklist','Cleaning steps for carpets, fabrics, and pet areas.'],
        ['Cockroach treatment preparation checklist','Kitchen and storage prep before treatment.']
      ].map(([title,desc])=>`<div class="mock-card" style="margin-bottom:4px;display:flex;align-items:center;justify-content:space-between;gap:12px"><div><div style="font-size:12px;color:#1a1a18">${title}</div><div style="font-size:10px;color:#5f5e5a;margin-top:2px">${desc}</div></div><button style="font-size:11px;padding:3px 8px;border-radius:4px;border:1px solid #d3d1c7;background:#f5f4f0;cursor:pointer">PDF</button></div>`).join('')}
      <div class="mock-section-head" style="margin:12px 0 8px">Prevention guides</div>
      ${[
        ['Rodent prevention — residents','Ways to reduce food, water, and shelter sources.'],
        ['Mosquito prevention — standing water','How to remove common breeding sites around a building.'],
        ['Pigeon exclusion — safe cleanup guide','How to clean up waste and keep birds away from shared spaces.']
      ].map(([title,desc])=>`<div class="mock-card" style="margin-bottom:4px;display:flex;align-items:center;justify-content:space-between;gap:12px"><div><div style="font-size:12px;color:#1a1a18">${title}</div><div style="font-size:10px;color:#5f5e5a;margin-top:2px">${desc}</div></div><button style="font-size:11px;padding:3px 8px;border-radius:4px;border:1px solid #d3d1c7;background:#f5f4f0;cursor:pointer">PDF</button></div>`).join('')}
      <div class="mock-section-head" style="margin:12px 0 8px">Educator resources</div>
      <div class="mock-card" style="display:flex;align-items:center;justify-content:space-between;gap:12px"><div><div style="font-size:12px;color:#1a1a18">NGSS standards alignment — mosquito education</div><div style="font-size:10px;color:#5f5e5a;margin-top:2px">Science standards and lesson plans for teachers and staff.</div></div><button style="font-size:11px;padding:3px 8px;border-radius:4px;border:1px solid #d3d1c7;background:#f5f4f0;cursor:pointer">PDF</button></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('classroom','Request a classroom or community visit')}${pageLink('topic','Healthy housing conditions')}${pageLink('complaintsdata','Complaint data dashboard')}${pageLink('hub','Healthy housing and vector control')}</div>
    </div>`}
];

function pestPage(title,code,signs,actions,tenantItems,ownerItems){
  return`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">${title}</div>
      <div style="font-size:10px;color:#888780;margin-bottom:4px">${code}</div>
      <div class="mock-purpose">Learn how to identify this condition, what to do now, and how to report it if it is not being corrected.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — signs of a problem</span>
      <div class="mock-signs-grid">${signs.map(s=>`<div class="mock-sign-item"><span class="mock-sign-dot"></span>${s}</div>`).join('')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c3">C3 — what to do now</span>
      <div class="mock-card"><ul class="mock-list">${actions.map(a=>`<li>${a}</li>`).join('')}</ul></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c4">C4 — responsibility split</span>
      <div class="resp-grid"><div class="resp-col"><div class="resp-col-head">Tenant</div>${tenantItems.map(t=>`<div class="resp-item">${t}</div>`).join('')}</div><div class="resp-col"><div class="resp-col-head">Property owner</div>${ownerItems.map(o=>`<div class="resp-item">${o}</div>`).join('')}</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — links: report a concern</span>
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('search','Search complaints and violations')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-notice"><div class="notice-text">HHVC may inspect the property. If HHVC finds violations, the owner or tenant must fix them.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — practical detail</span>
      <div class="mock-card"><div class="mock-section-head">Why the root cause matters</div><div class="mock-task-desc">If you don't remove food, water, and hiding spots, pests will usually come back.</div></div>
      <div class="mock-card"><div class="mock-section-head">Common causes and prevention</div><div class="mock-task-desc">Keep areas clean, seal holes, fix leaks, and use pest control when needed.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c9">C9 — detail section</span>
      <div class="mock-card"><div class="mock-section-head">How long-term prevention works</div><div class="mock-task-desc">To keep pests away, tenants must keep things clean and owners must fix holes and leaks.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — FAQ</span>
      <div class="mock-card" style="margin-bottom:4px"><div class="mock-task-title">Who is responsible for fixing this?</div><div class="mock-task-desc">Owners must keep living conditions safe and fix any issues. Responsibility varies with the lease and context.</div></div>
      <div class="mock-card"><div class="mock-task-title">Why does the problem keep coming back?</div><div class="mock-task-desc">Pests come back when there are still holes, leaks, or food left out.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('resources','Resources')}${pageLink('topic','Healthy housing conditions')}</div>
    </div>`;
}

const GROUPS={
  topics:{label:'Topic landing',pages:['hub']},
  learn:{label:'Topic and Information (16 pages)',pages:['topic','violationnotice','rodents','cockroaches','bedbugs','flies','mosquitoes','pigeons','fleas','poisonoak','garbage','animalwaste','vegetation','mold','excessive','unsanitary']},
  report:{label:'Transaction',pages:['report']},
  records:{label:'Transaction, Data story, and Resource collection',pages:['search','complaintsdata','resources']},
  pay:{label:'Transaction',pages:['pay']},
  field:{label:'Transaction',pages:['mqsurvey','deadbird']},
  outreach:{label:'Transaction',pages:['classroom']}
};

const PAGE_TYPES={
  hub:'Topic',
  topic:'Topic',
  violationnotice:'Topic',
  rodents:'Information',
  cockroaches:'Information',
  bedbugs:'Information',
  flies:'Information',
  mosquitoes:'Information',
  pigeons:'Information',
  fleas:'Information',
  poisonoak:'Information',
  garbage:'Information',
  animalwaste:'Information',
  vegetation:'Information',
  mold:'Information',
  excessive:'Information',
  unsanitary:'Information',
  report:'Transaction',
  search:'Transaction',
  pay:'Transaction',
  mqsurvey:'Transaction',
  deadbird:'Transaction',
  classroom:'Transaction',
  complaintsdata:'Data story',
  resources:'Resource collection'
};

const COMPONENT_TYPES=[
  'Accordions',
  'Address',
  'Alert',
  'Body, Main body, Text and title',
  'Button',
  'Callout',
  'Contact section',
  'Cost',
  'Data',
  'Description',
  'Heading',
  'Images',
  'Links',
  'Partner agency',
  'PDFs and other documents',
  'People section',
  'Primary agency',
  'Redirect this page to',
  'Related',
  'Resources',
  'Spotlight',
  'Tables',
  'Title',
  'Topics',
  'URLs',
  'Videos'
].filter((value, index, array) => array.indexOf(value) === index);

window.HHVC_DATA={ PAGES, GROUPS, PAGE_TYPES, COMPONENT_TYPES };
