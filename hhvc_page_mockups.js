const PAGES=[
  {id:'hub',label:'Topic: Healthy housing and vector control',group:'topics',role:'Topic & Information',roleColor:'#0F6E56',url:'sf.gov/topics/healthy-housing-and-vector-control',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page title</span>
      <div class="mock-h1">Healthy housing and vector control</div>
      <div class="mock-purpose">Information about housing health problems in San Francisco, pest and vector control, and how to report concerns.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — services</span>
      <div class="mock-card-grid">
        ${taskCard('topic','I have a pest or sanitation problem','Learn what to do and how to report it','Read guidance →')}
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
        <div class="mock-cta" style="margin-top:6px"><span class="mock-cta-text">Report a residential building concern</span>${ctaLink('report','Report now')}</div>
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
      <div class="mock-notice"><div class="notice-text">An HHVC inspector found one or more violations. Your Notice of Violation lists what was found, what must be fixed, and your deadline to comply.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c3">C3 — corrective actions</span>
      <div class="mock-card"><ul class="mock-list"><li>Read each violation and deadline on your notice</li><li>Fix every listed condition by the deadline</li><li>Save proof of corrections, such as receipts, photos, and treatment reports</li><li>Provide access to affected units and common areas for follow-up inspection</li><li>For properties in the HHVC inspection fee program, the first reinspection is covered. Reinspection fees may apply starting with the second reinspection (Sec. 609.1(c)).</li></ul></div>
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
    <div class="comp"><span class="comp-label lbl-c8">C8 — if the owner does not cooperate</span>
      <div class="mock-notice"><div class="notice-text">If required fixes are not completed, HHVC may take stronger steps, including city fines (administrative citations) and a Director's Hearing. Keep documenting unresolved conditions and continue reporting ongoing hazards.</div></div>
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

  {id:'rodents',label:'Rodents',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/rodents-in-your-building',render:()=>pestPage('Rodents','Sec 581(b)(13)',['Droppings near food storage or walls','Gnaw marks on packaging or wood','Scratching sounds in walls or ceilings','Burrows near the foundation or yard','Grease rub marks along baseboards'],['Store all food in metal, glass, or hard plastic containers','Remove clutter and stored items from floors','Eliminate standing water','Report visible openings or holes'],['Maintain sanitation and food storage','Report activity immediately','Prepare unit for inspection or treatment'],['Seal all openings larger than 1/4 inch','Provide professional pest control','Repair structural defects and leaks'])},
  {id:'cockroaches',label:'Cockroaches',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/cockroaches-in-your-building',render:()=>pestPage('Cockroaches','Sec 581(b)(8)',['Small dark droppings near stove or cabinets','Live insects at night or when lights turn on','Egg casings in corners or behind appliances','Greasy smear marks along walls'],['Clean food residue and grease from surfaces daily','Store food in hard containers with tight lids','Fix dripping faucets and leaks under sinks','Seal cracks around pipes and baseboards'],['Keep kitchen clean and grease-free','Store food properly','Report activity to owner by email, text, or letter'],['Arrange professional pest control','Seal structural cracks and crevices','Repair plumbing leaks'])},

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
      <div class="resp-grid"><div class="resp-col"><div class="resp-col-head">Tenant</div><div class="resp-item">Report promptly in writing</div><div class="resp-item">Follow preparation instructions</div><div class="resp-item">Provide access for treatment</div></div><div class="resp-col"><div class="resp-col-head">Property owner</div><div class="resp-item">Arrange professional treatment</div><div class="resp-item">Coordinate building-wide inspection</div><div class="resp-item">Provide prep instructions</div></div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c5">C5 — links: report a concern</span>
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('mqsurvey','Request a mosquito survey')}</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-notice"><div class="notice-text">If activity is confirmed, treatment and preparation steps will be required. The property owner is generally responsible for arranging pest control.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — practical detail</span>
      <div class="mock-card"><div class="mock-section-head">How bed bugs spread</div><ul class="mock-list"><li>They move with luggage, clothing, and furniture.</li><li>They can spread room to room through shared walls and items.</li><li>Containment matters before treatment starts.</li></ul></div>
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
    ${pestPage('Pigeons and bird waste','Sec 581(b)(7)',['Accumulated droppings on ledges or roofs','Active nesting or roosting on building','Feathers in vents or common areas'],['Do not feed pigeons or other birds','Report waste accumulation to property manager'],['Stop feeding birds on the property','Report nesting or waste to owner'],['Remove droppings and nesting safely','Install lawful deterrence measures'])}
    <div class="comp"><span class="comp-label lbl-c7">C7 — key message</span>
      <div class="mock-notice"><div class="notice-text">Do not sweep or disturb large accumulations of dry droppings without respiratory protection. Wet the area first or contact a professional.</div></div>
    </div>`},

  {id:'fleas',label:'Fleas',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/fleas-in-your-building',render:()=>pestPage('Fleas','Sec 581(b)(8)',['Bites on ankles and lower legs','Flea dirt in pet bedding or carpet','Pets scratching or grooming excessively','Jumping insects near floor level'],['Treat pets with veterinarian-recommended product','Vacuum all carpets and upholstered furniture','Wash all pet bedding and fabrics','Clean pet resting areas completely'],['Treat pet and environment simultaneously','Vacuum repeatedly over 2–4 weeks'],['Provide pest-free unit to new tenants','Address common-area infestations'])},
  {id:'poisonoak',label:'Poison oak',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/poison-oak-building',render:()=>pestPage('Poison oak','Sec 581(b)(11)',['Identifiable toxic plants in yard or lot','Three-leaf clusters, waxy appearance','Overgrowth in accessible areas'],['Avoid all contact','Do not attempt removal without protection','Report to property manager'],['Avoid contact, report to owner'],['Remove safely or hire licensed professional','Prevent regrowth in accessible areas'])},
  {id:'garbage',label:'Garbage / refuse',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/garbage-refuse-building',render:()=>pestPage('Garbage and refuse','Sec 581(b)(1)',['Accumulated trash or food waste','Overflowing bins or broken lids','Loose garbage on ground','Strong odor from refuse area'],['Place waste in proper sealed containers','Keep bin lids closed','Do not leave garbage on the ground'],['Bag waste properly','Use containers correctly, close lids'],['Provide adequate containers with tight lids','Maintain and clean refuse enclosures'])},
  {id:'animalwaste',label:'Animal waste',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/animal-waste-building',render:()=>pestPage('Animal waste','Sec 581(b)(1)(5)',['Visible feces in yard or common areas','Strong odor','Flies or pests attracted to waste area'],['Remove feces promptly','Clean and disinfect affected surfaces','Use appropriate protective equipment'],['Remove pet waste from personal areas','Report common-area accumulations'],['Remove accumulations from shared yards','Maintain common areas in sanitary condition'])},
  {id:'vegetation',label:'Overgrown vegetation',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/overgrown-vegetation-building',render:()=>pestPage('Overgrown vegetation','Sec 581(b)(2)',['Dense vegetation against building foundation','Inaccessible yard areas','Ground-level debris and wood piles','Concealed rodent burrows'],['Remove ground-level debris and stored materials','Clear access to foundation areas','Report overgrowth to property manager'],['Keep personal outdoor areas free of clutter'],['Trim vegetation away from structure','Remove debris from ground level','Restore inspection access to all areas'])},
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
  {id:'excessive',label:'Excessive materials',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/excessive-materials-building',render:()=>pestPage('Excessive materials','Sec 581(b)(18)',['Cluttered living areas blocking access','Items stored against all walls','Blocked pathways and exits'],['Remove excess stored materials','Elevate remaining items off the floor','Clear access to walls and baseboards'],['Maintain unit in inspectable condition','Reduce clutter to allow pest control access'],['Notify tenant by email, text, or letter','Allow reasonable time for correction'])},
  {id:'unsanitary',label:'Unsanitary conditions',group:'learn',role:'Learn',roleColor:'#0F6E56',url:'sf.gov/unsanitary-conditions-building',render:()=>pestPage('Unsanitary conditions','Sec 581(b)(4)',['Filth or debris accumulation','Contaminated surfaces','Strong odors from uncleaned areas'],['Clean affected areas thoroughly','Remove debris and contaminated materials','Report conditions the property owner must correct'],['Maintain unit in reasonably clean condition','Report structural sanitation failures'],['Maintain building common areas in sanitary condition','Address structural conditions causing unsanitary buildup'])},

  {id:'report',label:'Report a concern',group:'report',role:'Report',roleColor:'#185FA5',url:'sf.gov/report-residential-building-concern',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Report a residential building concern</div>
      <div class="mock-purpose">Use this form to report a housing health or sanitation concern to SFDPH. Use this page if your landlord or property manager has not corrected a problem you have already reported to them.</div>
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
        <div class="mock-proc-step"><span class="proc-num">3</span><div class="proc-text"><strong>Violations documented</strong> — If violations are found, a notice is issued requiring correction.</div></div>
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
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('complaintsdata','Complaint data dashboard')}${pageLink('hub','HHVC hub')}</div>
    </div>`},

  {id:'pay',label:'Pay fee',group:'pay',role:'Pay',roleColor:'#993C1D',url:'sf.gov/vector-control-healthy-housing-fee',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Vector Control and Healthy Housing fee</div>
      <div class="mock-purpose">Apartment and hotel owners in San Francisco must pay an annual fee. This fee supports the Vector Control and Healthy Housing Inspection Program.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — cost</span>
      <div class="mock-cost">
        <div class="mock-cost-head">Annual cost overview</div>
        <div class="mock-cost-note">The fee varies by building size. Use this page to confirm the annual cost and how to complete payment.</div>
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
      <div class="mock-notice"><div class="notice-text">If you do not pay the fee, HHVC may take enforcement action. See Health Code Sec. 609.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — FAQ</span>
      <div class="mock-accordion mock-faq">
        <div class="mock-acc-head">Who is required to pay? <span>+</span></div>
        <div class="mock-acc-body"><p>Property owners of multi-unit residential buildings must pay the annual inspection program fee. The fee is based on the number of units at the property.</p></div>
      </div>
      <div class="mock-accordion mock-faq">
        <div class="mock-acc-head">What if I believe I was billed incorrectly? <span>+</span></div>
        <div class="mock-acc-body"><p>Contact HHVC to dispute your billing. Call (415) 252-3800 or email hhvc@sfdph.org with your property address and details about the discrepancy. We'll review your account.</p></div>
      </div>
    </div>`},

  {id:'mqsurvey',label:'Request mosquito survey',group:'field',role:'Field service',roleColor:'#993556',url:'sf.gov/request-mosquito-survey',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Request a mosquito survey</div>
      <div class="mock-purpose">If you have a mosquito problem that you cannot resolve by eliminating standing water, the Healthy Housing and Vector Control program can send a team to assess and treat conditions at your property.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — what a survey includes</span>
      <div class="mock-card"><ul class="mock-list"><li>Inspect your property for breeding sources</li><li>Conduct a vector survey to assess activity levels</li><li>Apply safe, targeted pesticide treatment where appropriate</li><li>Install mosquito traps to monitor ongoing activity</li><li>Provide guidance on preventing future breeding</li></ul></div>
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
        <div class="mock-proc-step"><span class="proc-num" style="background:#FBEAF0;color:#993556">2</span><div class="proc-text"><strong>Field visit</strong> — A team member will assess your property and take appropriate action.</div></div>
        <div class="mock-proc-step"><span class="proc-num" style="background:#FBEAF0;color:#993556">3</span><div class="proc-text"><strong>Follow-up guidance</strong> — You will receive recommendations for ongoing prevention.</div></div>
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
      <div class="mock-purpose">Dead birds — especially crows, ravens, and jays — can indicate West Nile Virus activity in your area. San Francisco residents can report dead birds to the California Department of Public Health year-round using the state's online system.</div>
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
        <div class="resp-col"><div class="resp-col-head" style="color:#dc2626">Do not report these</div><div class="resp-item">Injured or sick (still alive)</div><div class="resp-item">Obvious physical cause of death</div><div class="resp-item">Heavily decomposed birds</div></div>
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c9">C9 — images: report vs do not report</span>
      <div class="mock-media-grid">
        ${mediaCard('Report these birds','Crows, ravens, jays, and similar birds found recently.','Bird ID example')}
        ${mediaCard('Do not report these cases','Live birds, obvious trauma, or heavily decomposed birds.','Bird ID example')}
      </div>
    </div>
    <div class="comp"><span class="comp-label lbl-c6">C6 — what happens next</span>
      <div class="mock-notice"><div class="notice-text">CDPH reviews reports and coordinates local collection. Not all birds are collected. Reports help the state track West Nile Virus activity.</div></div>
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
      <div class="mock-purpose">HHVC offers free mosquito education visits for San Francisco schools and community science centers. Visits are available for grades 2 through 12 and align with California NGSS.</div>
    </div>
    <div class="comp"><span class="comp-label lbl-c2">C2 — visit description + eligibility</span>
      <div class="mock-card"><ul class="mock-list"><li>Mosquito life cycle and breeding conditions</li><li>How to identify breeding sites in the neighborhood</li><li>Prevention steps for home and community</li><li>Connection to local vector control work</li></ul><div style="margin-top:8px;font-size:11px;color:#5f5e5a">Available to: any SF school (public, charter, private) · community science centers · community events · grades 2–12 · free of charge</div></div>
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
      <div class="mock-related">${pageLink('mosquitoes','Mosquitoes and standing water')}${pageLink('hub','HHVC hub')}<a class="mock-rel-link" href="https://www.cde.ca.gov/be/st/ss/">CA NGSS standards</a></div>
    </div>`},

  {id:'complaintsdata',label:'Complaint data',group:'records',role:'Records',roleColor:'#854F0B',url:'sf.gov/complaint-data-dashboard',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Complaint data dashboard</div>
      <div class="mock-purpose">View complaint volume, complaint types, and response trends for Healthy Housing and Vector Control cases in San Francisco.</div>
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
      <div class="mock-notice"><div class="notice-text">Data is shown in aggregate to protect privacy. Individual complaint details are available through records search.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c8">C8 — image: how to read this dashboard</span>
      ${mediaCard('How to read this dashboard','Image guide with callouts for filters, trend chart, and key numbers.','Dashboard guide')}
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('search','Search complaints and violations')}${pageLink('resources','Resources')}${pageLink('hub','HHVC hub')}</div>
    </div>`},

  {id:'resources',label:'Resources',group:'records',role:'Records',roleColor:'#854F0B',url:'sf.gov/healthy-housing-resources',
   render:()=>`
    <div class="comp"><span class="comp-label lbl-c1">C1 — page purpose</span>
      <div class="mock-h1">Resources</div>
      <div class="mock-purpose">Preparation guides, prevention handouts, and reference materials for residents, property owners, and educators.</div>
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
        ['Pigeon exclusion — safe cleanup guide','Safe cleanup and deterrence basics for shared spaces.']
      ].map(([title,desc])=>`<div class="mock-card" style="margin-bottom:4px;display:flex;align-items:center;justify-content:space-between;gap:12px"><div><div style="font-size:12px;color:#1a1a18">${title}</div><div style="font-size:10px;color:#5f5e5a;margin-top:2px">${desc}</div></div><button style="font-size:11px;padding:3px 8px;border-radius:4px;border:1px solid #d3d1c7;background:#f5f4f0;cursor:pointer">PDF</button></div>`).join('')}
      <div class="mock-section-head" style="margin:12px 0 8px">Educator resources</div>
      <div class="mock-card" style="display:flex;align-items:center;justify-content:space-between;gap:12px"><div><div style="font-size:12px;color:#1a1a18">NGSS standards alignment — mosquito education</div><div style="font-size:10px;color:#5f5e5a;margin-top:2px">Standards and lesson alignment for teachers and program staff.</div></div><button style="font-size:11px;padding:3px 8px;border-radius:4px;border:1px solid #d3d1c7;background:#f5f4f0;cursor:pointer">PDF</button></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('classroom','Request a classroom visit')}${pageLink('topic','Healthy housing conditions')}${pageLink('complaintsdata','Complaint data dashboard')}${pageLink('hub','HHVC hub')}</div>
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
      <div class="mock-card"><div class="mock-section-head">Why the root cause matters</div><div class="mock-task-desc">Treating pests without fixing food, water, shelter, or access points usually means the problem returns.</div></div>
      <div class="mock-card"><div class="mock-section-head">Common causes and prevention</div><div class="mock-task-desc">Focus on sanitation, sealing openings, moisture control, and coordinated treatment when needed.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c9">C9 — detail section</span>
      <div class="mock-card"><div class="mock-section-head">How long-term prevention works</div><div class="mock-task-desc">Sustained prevention combines resident behavior, owner maintenance, and follow-up checks over time.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c10">C10 — FAQ</span>
      <div class="mock-card" style="margin-bottom:4px"><div class="mock-task-title">Who is responsible for fixing this?</div><div class="mock-task-desc">Owners must keep living conditions safe and fix any issues. Responsibility varies with the lease and context.</div></div>
      <div class="mock-card"><div class="mock-task-title">Why does the problem keep coming back?</div><div class="mock-task-desc">Recurring activity often means root causes remain. These include entry points, moisture, food sources, and slow treatment.</div></div>
    </div>
    <div class="comp"><span class="comp-label lbl-c11">C11 — related links</span>
      <div class="mock-related">${pageLink('report','Report a concern')}${pageLink('resources','Resources')}${pageLink('topic','Healthy housing conditions')}</div>
    </div>`;
}

const GROUPS={
  gateway:{label:'Agency',pages:['hub']},
  learn:{label:'Topic and Information (16 pages)',pages:['topic','violationnotice','rodents','cockroaches','bedbugs','flies','mosquitoes','pigeons','fleas','poisonoak','garbage','animalwaste','vegetation','mold','excessive','unsanitary']},
  report:{label:'Transaction',pages:['report']},
  records:{label:'Transaction, Data story, and Resource collection',pages:['search','complaintsdata','resources']},
  pay:{label:'Transaction',pages:['pay']},
  field:{label:'Transaction',pages:['mqsurvey','deadbird']},
  outreach:{label:'Transaction',pages:['classroom']}
};

let current='hub';

const PAGE_TYPES={
  hub:'Agency',
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

function render(){
  const p=PAGES.find(x=>x.id===current);
  const pageType=PAGE_TYPES[p.id] || 'Information';
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
  select.innerHTML=['<option value="">Reference only</option>'].concat(COMPONENT_TYPES.map(type=>`<option value="${type}">${type}</option>`)).join('');
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
  Object.entries(GROUPS).forEach(([gid,g])=>{
    const grp=document.createElement('div');
    grp.className='nav-group';
    grp.innerHTML=`<div class="nav-label">${g.label}</div><div class="nav-btns">${g.pages.map(pid=>{const p=PAGES.find(x=>x.id===pid);return`<a class="nbtn ${gid}" id="btn-${pid}" href="#${pid}" data-page="${pid}">${p.label}</a>`;}).join('')}</div>`;
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
  const target=PAGES.some(page=>page.id===hash) ? hash : 'hub';
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
