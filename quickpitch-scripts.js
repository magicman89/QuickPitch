// Initialize variables in global scope
let currentCallType = null;

// Debug logging
console.log("🔧 QuickPitch Scripts Loading...");

// Carrier Information - Global scope
const carrierInfo = [
  {
    name: "Americo",
    phone: "Contact via system",
    products: "Whole Life, Term (ROP), IUL",
    commission: "140-145%",
    notes: "🏆 PRIMARY CARRIER",
  },
  {
    name: "Transamerica",
    phone: "(800) 797-2643",
    products: "Whole Life, IUL, Final Expense",
    commission: "140%",
    notes: "Second choice",
  },
  {
    name: "Corebridge",
    phone: "Contact via system",
    products: "Whole Life",
    commission: "135-140%",
    notes: "Third choice",
  },
  {
    name: "Mutual of Omaha",
    phone: "(800) 775-1000",
    products: "Term Life Express, IUL",
    commission: "145%",
    notes: "Second for Term/IUL",
  },
  {
    name: "Ethos",
    phone: "(415) 797-0864",
    products: "Term Life",
    commission: "145%",
    notes: "Ages 25-50",
  },
  {
    name: "American Amicable",
    phone: "(800) 736-7311",
    products: "Senior Choice, GI",
    commission: "125-145%",
    notes: "GI, diabetes, seniors",
  },
];

// Compliance Rules - Global scope
const complianceRules = {
  mustDo: [
    "Read Life Summary and Consent script VERBATIM at end of sale",
    "Document EVERY interaction (initial + last name + date)",
    "Read EVERY medical question aloud",
    "Confirm draft dates with clients",
    "Verify ALL information before submitting",
  ],
  cannotDo: [
    "NEVER hang up on clients",
    "NEVER erase other agents' notes",
    "NEVER speak negatively about other agents",
    "NEVER make assumptions about policy types",
    "NEVER fabricate any information",
  ],
  callbackRule:
    "⚠️ If callback within 2 weeks: DO NOT PITCH. Over 2 weeks: Scriptable.",
};

// Call Scripts - Global scope
window.callScripts = {
  "ring-fex": {
    script: `**⚠️ VERBATIM OPENING (FIRST 2 MINUTES - MUST READ EXACTLY):**

**AGENT:**
Hello.
Welcome to [AGENCY_NAME].
I understand you're calling to set up a plan to cover your Final Expenses, is that correct?

[Get their response, don't let them ramble on. QUICKLY TAKE CONTROL OF THE CALL and introduce yourself with the paragraph below.]

**AGENT:**
Great, my name is [AGENT_NAME] and these state approved plans, they are Final Expense Burial Plans designed for seniors on a limited income. It is an opportunity to get discounted prices on burial insurance. Your monthly payment is based on your age, your health, and the amount of coverage you choose, and you may qualify for up to $40,000. Is that fair enough?

**🔄 CALLER OBJECTION:** "Is this free?" "Do I pay for this?" or "It's not through the government?"

**💚 REBUTTAL:** These are state approved plans; they are Final Expense Burial Plans designed for seniors on a LIMITED INCOME. It is an opportunity to get DISCOUNTED PRICES ON BURIAL INSURANCE.

[If you need to say again EMPHASIZE.] It is an opportunity to get DISCOUNTED PRICES ON BURIAL INSURANCE.

[This is where the caller will either hang up on you or ask "How much is it?" If they ask: "How much?" You got them, and keep going with the script.]

**🔄 CALLER OBJECTION:** "I saw where I can get $25,000 for $2 a day?"

**💚 REBUTTAL:** Yes excellent, I've helped hundreds of people get that; we just need to see what you qualify for. Are you between the ages of 50 and 82?

[Do NOT give a price or a range of price. DO NOT QUOTE HERE. Ask their age and stick to the script.]

**AGENT:**
OK, just a few questions to see what you qualify for. Are you in between the ages of 45 and 82?

[This is where you are deciding to move forward with the caller. Are they under the age of 45 or over the age of 82? If so, hang up quickly and take next call.]

**AGENT:**
And what state do you live in?

[This is where you are deciding to move forward with the caller. Are they calling from a state you are not licensed in? If so, tell them you are not licensed in that state and hang up quickly.]

**AGENT:**
Are you currently in a hospital, nursing home, or an assisted living facility?

[This is where you are deciding to move forward with the caller. Are they calling from a hospital, nursing home, or an assisted living facility? If so, hang up quickly and take next call.]

**AGENT:**
Are you being treated for Alzheimer's, dementia, or memory loss?

[This is where you are deciding to move forward with the caller. If so, hang up quickly and take next call.]

**AGENT:**
Just to confirm your eligibility for some discounts — do you currently bank with a traditional bank or credit union?

[This is where you are deciding to move forward with the caller. Do they have a bank account? If NOT, hang up quickly and take next call.]

**THE SALE PROCESS STARTS HERE:**

At this point you can use the script of your choice. YOU DO NOT HAVE TO USE THE REST OF THIS SCRIPT. Use what fits you; use what you are comfortable with and what works with your carriers and products.

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**
**🎯 AGENT QUALIFICATION SCRIPT (ALTERNATIVE APPROACH):**
**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

**AGENT:**
Can you spell your first and last name and verify your date of birth?

**AGENT:**
"Hey [CLIENT_NAME], what's got you looking into getting this today?"

**⚠️ IF THEY SAY THEY DON'T HAVE LIFE INSURANCE:**
Wait, so if you died tomorrow, [BENEFICIARY] would have to pay for everything out-of-pocket? Wow, it sounds like we definitely need to get this done today.

**AGENT:**
"Do you already have coverage now?"

If so, how much coverage, how much are you paying, and how long have you had it?

**AGENT:**
"Who are we trying to protect today?" (Beneficiary)

**AGENT:**
"Do you plan on getting cremated or buried, and how much coverage do you think you need?"

**AGENT:**
"Life insurance is something that you can't just buy—you do have to qualify for it."

**AGENT:**
"Do you have any major or minor medical conditions, or are you taking any prescription medications?"

**AGENT:**
Since I am licensed with the state, we do have a national database with all the insurance carriers. I am going to now search to see who has the most discounted prices for the coverage you're looking for.

**AGENT:**
"It looks like here on my end for [COVERAGE_WITH_DOLLAR] of coverage, the top carriers—like Transamerica, Mutual of Omaha, and Aflac—are around [PREMIUM] to [NEW_PREMIUM]. But I see you actually had an offer from Americo before your last birthday for that same coverage at [LOWER_PREMIUM]. Is there any reason you didn't take that when you had the chance?"

**AGENT:**
"Gotcha, that makes sense. What I'm going to do is see if underwriting will give us a one-time reinstatement. No promises or guarantees. What's your height and weight?"

**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**
**📋 STANDARD RING FEX SCRIPT (ORIGINAL APPROACH):**
**━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━**

**AGENT:**
OK, everything sounds great and can I get your first name & what's your last name?

**AGENT:**
OK, and [CLIENT_NAME], we're going to go ahead and get you this quote.

**AGENT:**
Now, I do need to let you know that our calls here are going to be recorded for quality and training purposes. Well, I'm glad you called today. Now, here at [AGENCY_NAME] we do two things. Our primary mission is to make sure that your family is not burdened by funeral expenses, but we also want to help you leave a nest egg or a legacy for your family if you can. Our clients have the peace of mind knowing that their families won't struggle financially when they're gone. Now, these days we're finding that funeral homes are charging from $5,000 to $15,000, depending on what kind of funeral you choose. Does that sound about right to you?

**AGENT:**
Yeah, it's getting pretty expensive. How long has it been since you had to deal with a funeral home?

**AGENT:**
And was that someone close to you?

**AGENT:**
Well, I'm very sorry for your loss. Do you recall, with everything at the time, did he have a policy to cover everything, or did you have to struggle to come up with the money?

**AGENT:**
Got it. That's good.
Now let me ask about what is your main concern? Is it trying to protect your family from having to pay for your funeral expenses, or are you trying to leave something extra?

**AGENT:**
Excellent. Now who is it that you're trying to protect from having that burden of paying your final expenses? Is it your children?

**AGENT:**
What a blessing to be surrounded by so much family and love. You are truly very lucky for that. Well, I'm going to prepare your quote, but I want to first tell you a little bit about Final Expense and Burial Benefit Insurance.

Now, [CLIENT_NAME], there isn't one single insurance company that can have the best value for every age and health, so we're going to run a price comparison and shop at the highest-rated companies to find the best price and best value of coverage. This is going to save you a lot of time and give you the lowest premium with the best policy. Let's see what we can do, I can get you qualified for a really good policy. Can you receive text messages on your phone?

Okay great, I just wanted to send you my digital business card, it's going to have my name, my license number and my website. I'm going to prepare your quote but first let me tell you a little bit about us. The Better Business Bureau rates us as exceptionally reliable and dependable. For 23 years they've graded our reliability as A+, the highest possible grade. That's the main reason I'm so excited to work for this company and have been for 11 years. One of the main reasons we've been able to grow so quickly is that we are an independent agency and represent over 100 insurance companies. Our founder started with one company, every time another agent beat his price or value, he went out and established a relationship with that company, now no one can ever beat us. I'm going to get quotes for you today from every company you can name and even some you've never heard of. Companies like Prudential, Mutual of Omaha, TransAmerica, John Hancock, Northwestern Mutual, Aflac and the list goes on and on. Does that make sense?

We have a great relationship with all of them but we actually work for our clients like you because here's the problem, there can't possibly be one single insurance company who can give the best value for every person, age and health condition. If there was one company who did everything the best for every situation, there wouldn't be so many insurance companies. That's why we work with so many, that way we can run a price comparison and shop all of the high rated companies to get the best price and value for your specific situation. Our process is going to save you a lot of time and more importantly it's going to let you get the lowest premium with the best policy. Now I know that you're [CLIENT_AGE]. What is your date of birth?

What is your height and weight?

Do you use any tobacco or nicotine products?

Great! There are companies that actually give you a discount because you [SMOKER_STATUS]. Now there are also discounts available for those who receive social security or disability, do you receive either of those benefits?

Okay great, just so I can apply the correct discount, do you receive your benefits on a government issued direct express MasterCard?

Okay then you'll save even more money for that! Great!

Mr./Mrs. [CLIENT_NAME], we also have some policies that don't require any health questions. Acceptance is guaranteed, and they cannot turn you down. And those are the best policies for people that have significant health issues. But we also have other policies that cost less, which saves you money and gives you better benefits, but you have to qualify for those.

And what I want to do is ask you a few health questions to see if you do qualify. I just want to help obtain the best program available for you. Does that make sense?

Now have you had Covid in the last 12 months?

Have you been hospitalized overnight in the last 2 years?
- What for?

Any dialysis or oxygen?

Dementia? Alzheimer's? Memory Loss?

ALS? Lou Gehrig's disease? HIV or AIDS?

Wheelchair, cane or walker?

Do you currently need assistance from anyone for activities of daily living? Like do you need help eating, getting dressed, going to the bathroom?

I have a list of conditions I need to read off, I'm going to go pretty quickly but just need to know if any apply to you. I'll pause once in a while but please interrupt me if there's something relevant to you today or in your history, okay?

So we have:
Cirrhosis, Liver failure, Hepatitis A, B or C, Kidney Disease, Kidney Failure?

Bipolar, Manic, Schizophrenic, Depression, Anxiety, Any suicide attempts?

Seizures, Parkinson's or any disease or disorder of the brain?

Any issues with anorexia, bulimia, or any eating disorder?

Pancreatitis, ulcerative colitis, Crohn's disease, muscular dystrophy, or multiple sclerosis?

Blood disorders such as sepsis or any auto immune disorders such as Rheumatoid Arthritis, Sarcoidosis or Systemic Lupus?

For breathing and lungs, any COPD, emphysema, chronic bronchitis, or asthma?

Do you ever use an inhaler for any reason?

Have you ever had cancer in your lifetime?

In the last 3 years have you been in jail, on parole or had drug or alcohol treatment?

Now onto heart and circulation concerns, any Coronary Artery Disease, stents, bypass or angioplasty?

Artery disease in legs or other areas, heart attack or stroke?

Have you ever had angina, cardiac arrhythmia, chest pain, irregular heartbeat or a fib?

Have you ever had a pacemaker or defibrillator installed?

What about pulmonary embolism, blood clots or congestive heart failure?

Cardiomyopathy, which is hardening of the heart, aneurysms, or any uncontrolled high blood pressure?

Have you ever taken or filled a prescription for Nitroglycerin or isosorbide?

Have you ever had diabetes?

Any complications like ever neuropathy, which is tingling in the hands or feet, retinopathy, which is blurred or loss of eyesight, nephropathy or ever had an amputation or diabetic coma?

Have you ever taken Gabapentin, or by another name of Neurontin or Pregabalin which is also called Lyrica?

Do you have any surgeries or procedures scheduled or any diagnostic tests you have recently taken that the results haven't come back for yet?

What prescription medications are you on? Or just what they're being taken for?

Thank you so much for going through those medical questions, all of that information is going to help me do the best job I possibly can for you when I'm shopping at those 100 companies to find the best policy for your specific situation. I want to show you how these policies work and why they're the best policies for final expense. All of these plans have been approved and certified by the Department of Insurance and are designed for seniors on a limited income, they are whole life and pay a guaranteed cash benefit directly to your family and you can choose any amount that fits your budget. The premium is guaranteed never to increase and is locked in at your current age and they can't raise it even a penny for any reason. You are [CLIENT_AGE] years old and we'll lock it in today. Also the amount of insurance never decreases no matter how long you live. None of our policies are term policies that only cover you temporarily, we don't offer term policies. With us, your price and coverage is guaranteed for your lifetime so you know you won't lose your coverage or burden your family. Also please note the government will not get their hands on any of this money as it's not taxable on the state or federal level. And it is immune from debtors and creditors so if you pass away with a medical bill, credit card bill or any debt, the money will still be paid to your family. With VA Burial all of our policies are whole life and will build cash value. Do you have any questions about the policies before I place you on hold for a minute to get your price quotes?

I'm going to place you on a silent hold while I shop around and get all of the quotes. I want to be as thorough as possible to save you as much money as I can. Are you looking more for a burial or a cremation?

Okay great, we trust a 3rd party independent website called Funeralocity. They've been around a very long time and have data on the actual prices of millions of funerals in every state. They have an average funeral price tool, I'll send you a text with a link for [STATE] where you can look at it while I'm shopping for you. Usually the actual prices shock people because funeral directors and insurance people usually try to oversell to pad their own pockets. Here at VA Burial we give you the truthful information, time to review it and let you make your own decision.

Please don't hang up [CLIENT_NAME] or we'll have to start all over again. Now would be a good time to get a pen and paper ready for when I come back. It's just going to be 3 minutes and you can time me, I'll be back with you in under 3 minutes, okay?

[Put client on hold for 2 minutes and send: www.funeralocity.com/average-funeral-price]

**AGENT:**
[CLIENT_NAME]?
I have your quote ready and it's very good news, at your age with your specific health history, [CARRIER] is going to be the best option by far. Are you familiar with [CARRIER]?

[Yes] Perfect! I'm not surprised, they've been around forever and have a great reputation. They just happen to be the best value for clients like yourself with [MEDICAL_CONDITION].

[No] No problem! They're really popular, have a great reputation and they just happen to be the best value for clients like yourself with [MEDICAL_CONDITION].

I'm going to tell you a little about them because I want to make sure you're comfortable with our choice. [CARRIER] has been around for a long time, close to 100 years, they have billions in assets so paying [COVERAGE] will be no problem, they actually have an A rating by A.M. Best for claims paying ability too. [CARRIER] is Better Business Bureau accredited and they have an A+ rating by consumer reports. They've had over 10 million clients too. You're in great hands with them.

I'm going to give you a few options, you can always choose more coverage or less coverage than these options depending on your budget. Also remember when you find the one you want, you don't have to pay any money today, we just apply to lock it in today. Are you ready to write down the quotes?

**BURDEN VS BLESSING:**
Okay great, at the top, I want you to put a line down the middle of the paper and on one side write the word Burden and on the other side at the top write the word Blessing. Let me know when you're ready:

**BURDEN SIDE:**
A Direct Cremation of $2,500 would be: [PREMIUM]/month
A Full Service cremation of $6,000 would be: [PREMIUM]/month
OR
An Affordable Burial of $5,000 would be: [PREMIUM]/month
A Traditional Full Service Burial of $9,000 would be: [PREMIUM]/month

Circle the one you want your family to remember you by, then I'll give you the options for the blessing side, which one did you circle?

Okay great!

**BLESSING SIDE:**
Here are the options for the blessing side of the paper, there are going to be 5 options ranging from $5,000 up to $40,000 so please make sure you leave room. I'll give you $5,000, $10,000, $15,000, $20,000, $30,000, $40,000.

$5,000 would be: [ADDITIONAL_PREMIUM]/month
$10,000 would be: [ADDITIONAL_PREMIUM]/month
$15,000 would be: [ADDITIONAL_PREMIUM]/month
$20,000 would be: [ADDITIONAL_PREMIUM]/month
$30,000 would be: [ADDITIONAL_PREMIUM]/month
$40,000 would be: [ADDITIONAL_PREMIUM]/month

You will also get a small discount on the monthly when you choose to take care of your final expense and leave a gift also with a multi-purpose discount. Please circle the amount of cash you'd like to leave your family and let me know which one you chose.

[Pause]

Great! We'll go ahead and get you approved, the total for both, including the multi-purpose discount is going to be only [NEW_PREMIUM] for a total coverage amount of [COVERAGE]. Is that comfortable for you?

Now of course that is a tentative rate based on the information you have given me over the phone. Actual rates are determined by the underwriting system. What we do is answer a few more questions together to make sure your answers match up with the records. Is there anything you didn't tell me about your situation [CLIENT_NAME]?

Great, well let's check your records together, and see if we can get you approved so you can cross this off your to do list once and for all. Now I have your name as [CLIENT_NAME], is that your full legal name or do you have a middle name too?

Okay great! I recommend we start today then I can set up your future payments to get drafted when you have your money come in. That way you're covered immediately, so your [BENEFICIARY] will be taken care of. Again just [NEW_PREMIUM] a month and your [BENEFICIARY] doesn't have to pay anything themselves for your final expenses and they also will receive that money as a final 'I love you.' Any questions about any of those recommendations?

[COMPLETE THE APPLICATION - Collect bank or card info]

**FINAL TWO PROMISES:**
Alright well we're all done, congratulations on getting approved! Grab a pen and paper, I'm going to give you my contact information and your policy number. Let me know when you're ready.

[CLIENT_NAME], would you agree that I've made several promises to you today? I've promised you that this policy will pay out tax-free to your [BENEFICIARY], promised to assist them with the claims process when you die, I've promised this policy can provide money if you need it while you're alive, I've promised to always be available to address any questions or concerns you may have for the years to come. Most importantly, I've promised to find the absolute best policy tailored to your needs.

Now, I'd need you to make me just two promises in return. First promise, can we agree that this policy of [COVERAGE] for [NEW_PREMIUM] comfortably fits within your budget today? If not, it's perfectly okay, I can still change it, I only ask that you tell me now so I can help you accordingly, I want to make sure we're communicating well. I understand that life circumstances can change, so if, in the future—whether that's 2, 3, 6, or 10 years down the road—this policy becomes unaffordable, I need you to reach out to me. Canceling the policy is the absolute worst thing you could do, as it can result in the loss of most, if not all, the money you've put in, even if it's just the first month. It could also bar you from taking out another policy with [CARRIER] and they are the best carrier for you. Do you agree that it's consistently comfortably affordable today and you'll reach out to me if that ever changes?

The second promise [CLIENT_NAME] is there are hundreds of thousands of insurance agents out there, now you got the best one, hands down, but somewhere down the road one of them is going to call you or knock on your door because that's what they do and they're trying to do their job and that's okay. But if someone calls you and tells you your policy is bad and they can get you something better, that I don't know what I'm talking about, they're just lying to you. What I want you to do is get a quote from that person, don't be mean to them and send it to me or call me. If it's better, I'll tell you that it's better, I'll even do the paperwork to get you into that better rate. But if it's not better, I'll tell you why it's not better and I'll be more than happy to call that other agent on a three-way call with you, and explain to them why it's not better, is that fair? Can you do that for me [CLIENT_NAME]?

So with this policy your [BENEFICIARY] doesn't have to worry and that was the goal, we did it! You'll get your policy documents in the mail as soon as the first payment comes out, if you have any questions just reach out to me. Don't cancel, communicate, I know this is important to you and I'm honored I get to be the one to help [BENEFICIARY] get the money on the worst day of their life, please do let them know I'll be reaching out and to save my number. Any questions before I let you get on with the rest of your day?

Great! Congratulations again, you did a really good thing today and let me know if you think of anyone who needs coverage! Bye for now!`,
    objections: [
      {
        o: "Is this free? Do I pay? It's not through the government?",
        r: "These are state approved Final Expense Burial Plans designed for seniors on a LIMITED INCOME. It's an opportunity to get DISCOUNTED PRICES ON BURIAL INSURANCE.",
      },
      {
        o: "I saw $25,000 for $2 a day?",
        r: "Yes excellent! I've helped hundreds get that. We just need to see what you qualify for. Are you between 50 and 82?",
      },
      {
        o: "How much is it?",
        r: "Your monthly payment is based on your age, health, and coverage amount. Let me ask a few questions to see what you qualify for.",
      },
      {
        o: "I need to think about it",
        r: "I understand. But your rate is locked at your current age. Every birthday can increase your premium. Let's at least see what you qualify for today.",
      },
      {
        o: "I need to talk to my spouse",
        r: "Absolutely. But let's get you qualified first so you have real numbers. We're not charging today, just locking in your rate.",
      },
      {
        o: "Can you call me back?",
        r: "I can, but if you have health changes or a birthday, it could affect your rate. Since I have you now, let's see what you qualify for - takes 3 minutes.",
      },
      {
        o: "I already have coverage",
        r: "That's great! Many clients find they're underinsured or overpaying. When's the last time you reviewed your policy? Rates have dropped.",
      },
    ],
    tips: [
      "Take control early - don't let them ramble",
      "Qualify HARD on age, state, facility, dementia, banking",
      "Emphasize 'state approved' and 'discounted prices'",
      "Use 'burden vs blessing' framework for emotional impact",
      "Create urgency with age/health/rate locking",
      "Never quote prices early - always qualify first",
      "3-minute hold builds anticipation",
      "Multi-purpose discount creates perceived savings",
      "Two promises close is critical - get verbal commitment",
    ],
  },

  "quote-shopping": {
    script: `**OPENING:**
Good morning/afternoon. This is [AGENT_NAME]. How can I help you today?

**DISCOVERY:**
That's one of the carriers I can help you with. Are you looking to get a policy or service an active policy?
You're talking with the right person. I'm an agent, so I'd be happy to help you out.

**HEALTH QUALIFICATION:**
Any tobacco or nicotine use?
Any current or past health issues? The main ones underwriters care about: diabetes, COPD, congestive heart failure, liver/lung disease, strokes, cancer?

**VALUE POSITIONING:**
Where it's really beneficial speaking with me is that we work with over 40 different life insurance companies. I know these companies' underwriting like the back of my hand. I'm going to figure out which company gives you day one immediate coverage and the cheapest rate.

**QUOTE PRESENTATION:**
It looks like Americo and Transamerica are very close in price. However, there was an option with Americo that would give you the same [COVERAGE_WITH_DOLLAR] for [NEW_PREMIUM] a month. Is there any reason you didn't just take that?

**APPLICATION:**
I'll walk you through the application, OK? It'll take about 3 minutes. Then we can set it up for the 1st or 15th for you.`,
    objections: [
      {
        o: "I'm just shopping around",
        r: "Perfect. I shop 40 companies at once. You get your answer in 3 minutes instead of wasting all day.",
      },
      {
        o: "I need to talk to my spouse",
        r: "Sure. But let me find out what you qualify for while you're healthy. Then you'll have real numbers to show them tonight.",
      },
      {
        o: "I want to think about it",
        r: "Okay. But if your health changes next week, this price is gone forever. Lock it in now, cancel later if you want.",
      },
      {
        o: "The price is too high",
        r: "Compared to what? Let me show you what else is out there. What were you hoping to pay?",
      },
    ],
    tips: [
      "Always verify if they have current coverage first",
      "Use the '40 companies' advantage",
      "Get health info early to route correctly",
      "Lead with Americo for most products",
      "Create urgency with age/health changes",
    ],
  },

  "additional-coverage": {
    script: `Okay thank you for your patience, [CLIENT_NAME].

Let's get this squared away. But before I do, I saw something odd and concerning. Can you confirm your address?

Huh, okay. It looks like Americo was trying to reach you. You were given an offer to increase your coverage because the [COVERAGE_WITH_DOLLAR] is flagging as underinsured. They were giving you the opportunity to add $5,000-$10,000 coverage to bring you to industry standard. To add $5,000, it would only be about [ADDITIONAL_PREMIUM] a month as long as you're still healthy. It was returned as no-response or decline. I'm confused why you wouldn't have done that.

You never got it? When's the last time you spoke to your agent? You haven't?? Okay that's a problem. This looks like an expired option. Somebody dropped the ball. Let me look into this.

[Quick Hold]

Okay, I appreciate your patience. I can't make promises but I'm going to see if I can get this activated. I was instructed to see if you can qualify, and if you do, I have a shot of getting it in place. We would just re-verify your health to make sure you're as healthy as when we started the policy. Quick process then get you more coverage. Can you confirm your height/weight?`,
    objections: [
      {
        o: "I don't need more coverage",
        r: "I thought that until I saw the funeral home bill. Average is now $12,000. You'd leave a $7,000 bill.",
      },
      {
        o: "I can't afford more",
        r: "It's only [ADDITIONAL_PREMIUM] a month. That's less than one meal out. But it saves your family thousands.",
      },
      {
        o: "Let me think about it",
        r: "This is an expired option. I'm trying to reactivate it, but I need to qualify you now while I have the chance.",
      },
    ],
    tips: [
      "Always handle their original request FIRST",
      "Position as 'I discovered this' not 'I'm selling'",
      "Use 'underinsured' flag as justification",
      "Create urgency with 'expired option'",
      "Lead with Americo",
    ],
  },

  "standard-preferred": {
    script: `Okay thank you for your patience, [CLIENT_NAME].

Let's get this squared away. But I saw something odd and concerning. Were you sick when you took out this policy? Really? No Cancer, Heart attack, Stroke, Diabetes?

Because it looks like you were placed in a standard policy typically reserved for sick people. A healthy person would be in what we call a preferred tier, which is about 25-30% cheaper. My job is to advocate for our clients - somebody should have made you aware of this.

Let me look into this and see if I can get you reclassified. It depends on if you're still as healthy as when you took out the policy, but there's no guarantees. Would you like me to look into that?

[Hold]

Alright, I pulled your information and filed the reclassification form. The underwriter came back and said you DO qualify for the preferred tier at the lower [NEW_PREMIUM] rate. That [SAVINGS] per month savings adds up to [20_YEAR_SAVINGS] over 20 years that you would have overpaid.

So I can submit this now and process it, or you can wait and contact your agent. Preference?`,
    objections: [
      {
        o: "Why wasn't I told about this?",
        r: "Great question. Someone dropped the ball. I'm fixing it now so you don't overpay anymore.",
      },
      {
        o: "How do I know this is real?",
        r: "You'll get confirmation from the carrier. Plus it's in writing. You're saving [SAVINGS] per month.",
      },
      {
        o: "Let me think about it",
        r: "Think about what? Saving [SAVINGS] per month? Every month you wait, you lose money.",
      },
    ],
    tips: [
      "Position as 'I discovered an error'",
      "Use 20-year savings for impact",
      "Emphasize advocate role",
      "Create urgency with monthly losses",
    ],
  },

  "term-permanent": {
    script: `Okay thank you for your patience, [CLIENT_NAME].

Let's get this squared away. But I saw something odd. It looks like we were trying to reach you to get your temporary policy converted to permanent coverage so your payment never increases and your coverage never expires. Is there any reason you haven't done that yet?

Makes sense. Okay that's a problem. This looks like an expired option. Somebody dropped the ball. Let me look into this.

[Hold]

I appreciate your patience. So it looks like you have the option to lock in your rate at [NEW_PREMIUM] per month permanently. Or you continue with term and in 10 years your rate jumps to [PREMIUM] - maybe more. [SAVINGS] per month more. Over 20 years that's [20_YEAR_SAVINGS] extra you'd pay.

Plus, with permanent, you build cash value you can borrow against. With term, you pay and get nothing back.

So would you like to lock in [NEW_PREMIUM] permanently, or stay with term and pay [PREMIUM] later?`,
    objections: [
      {
        o: "Term is cheaper",
        r: "For now. In 10 years you'll pay [PREMIUM]. Over 20 years you overpay by [20_YEAR_SAVINGS].",
      },
      {
        o: "I don't need coverage forever",
        r: "No one does. But would you rather pay less now and lock it in, or pay triple later?",
      },
      {
        o: "I'll convert later",
        r: "You can't. This is the expired offer. If you wait, rates go up with age.",
      },
    ],
    tips: [
      "Focus on rate increases with term",
      "Use 20-year math for impact",
      "Emphasize cash value benefit",
      "Position as 'expired option'",
    ],
  },

  cancellation: {
    script: `**REASON INQUIRY:**
And what's the reason for cancellation? Did you find other coverage or you can't afford it anymore?

**IF THEY FOUND OTHER COVERAGE:**
Okay, who is that through? Same [COVERAGE_WITH_DOLLAR]? What are they charging you per month?

**RETENTION SCRIPT:**
Okay before I cancel you, as your advocate I need to let you know - [CARRIER] isn't going to let you go without a fight. They asked me to offer you a discounted rate of [NEW_PREMIUM] per month to keep you. That matches what you were quoted elsewhere, plus you keep your current coverage without requalifying. Because if there's been any health changes, that other company might decline you. Would you like me to apply this discount or still want to cancel?

**IF CAN'T AFFORD:**
I completely understand. Before we cancel, let me ask - would you rather reduce the coverage to something affordable, or lose everything and leave your family with the funeral bill?

We can drop you down to [COVERAGE] for about [NEW_PREMIUM] a month. That at least covers the funeral. Better than nothing, right?

**FINAL ATTEMPT:**
Listen, [CLIENT_NAME], I've seen too many families struggle with funeral costs. [CARRIER] has been paying claims for 100 years. Let's find a way to keep at least some coverage. What's the lowest monthly payment you could do?`,
    objections: [
      {
        o: "I already signed with someone else",
        r: "They haven't processed it yet. And if your health changed, they might decline you. Keep this until that's approved.",
      },
      {
        o: "I can't afford anything",
        r: "What if I get you down to [NEW_PREMIUM] per month? That's cheaper than one meal out, but saves your family thousands.",
      },
      {
        o: "I'm canceling everything",
        r: "That's a mistake. When someone passes, who pays the $12,000 funeral? Keep the minimum.",
      },
    ],
    tips: [
      "Always match or beat competitor pricing",
      "Emphasize health qualification risk",
      "Use 'reduce coverage' not 'cancel'",
      "Paint picture of family burden",
    ],
  },

  "death-claim": {
    script: `I'm very sorry for your loss. I know this is a difficult time. I'm here to help you through this process. Let me make this as simple as possible.

**GATHERING INFORMATION:**
First, can you tell me the name of the person who passed away?
And what was your relationship to them?
Do you have the policy number handy, or should I look it up by their name and date of birth?

**CLAIM PROCESS:**
Okay, I found the policy. They had [COVERAGE_WITH_DOLLAR] with [CARRIER]. Here's what we need to do:

1. I need a certified copy of the death certificate - you can get that from the funeral home
2. I'll email you the claim form right now
3. You fill it out and sign it
4. Email or fax it back with the death certificate
5. [CARRIER] typically processes claims within 7-10 business days

The money will be sent directly to you as the beneficiary. It's completely tax-free.

**EMPATHY & SUPPORT:**
I know paperwork is the last thing you want to deal with right now. I'll be with you every step of the way. You have my direct number. Call me anytime if you have questions or just need help with the process. Okay?

**FOLLOW-UP:**
Once you have the death certificate, call me immediately and I'll walk you through the form. Is there anything else I can help you with today?`,
    objections: [
      {
        o: "How long does this take?",
        r: "Usually 7-10 business days once we submit everything. I'll follow up to make sure it's processed quickly.",
      },
      {
        o: "Do I need a lawyer?",
        r: "No. This is straightforward. I'll help you with everything. No lawyer needed.",
      },
      {
        o: "Will taxes be taken out?",
        r: "No. Life insurance proceeds are completely tax-free. You get the full [COVERAGE_WITH_DOLLAR].",
      },
    ],
    tips: [
      "Lead with genuine compassion",
      "Keep process simple and clear",
      "Offer ongoing support",
      "Be patient and understanding",
    ],
  },

  "loan-cash": {
    script: `Okay thank you for your patience, [CLIENT_NAME].

Let's get this squared away. But I saw something odd. You've built up substantial cash value, about [CASH_AMOUNT], and Americo was trying to give you access to it. Since you're still healthy, you qualify for a "Cash Surrender" where you can take out all the cash in your current policy and just switch your coverage to a new policy with the same coverage/cost. But it was returned with no-response or decline. That means now the only way you can access it is through a loan that you have to pay back - plus interest. Why didn't you do that when you had the chance?

You never got it? When's the last time you spoke to your agent? You haven't?? This looks like an expired option. Let me look into this.

[Quick Hold]

Okay, I can't make promises but I'm going to see if I can get this activated. I was instructed to see if you can qualify, and if you do, I have a shot. If all goes well, you'll get a check in the mail for the full amount of your cash value and you'll maintain your coverage just with Americo now. Can you confirm your height and weight?`,
    objections: [
      {
        o: "I just need money now",
        r: "Exactly. Loan gives you less money and you pay interest. This gives you more money AND you keep your coverage.",
      },
      {
        o: "Sounds complicated",
        r: "Loan = 3 payments. This = 1 check for more money, 1 lower payment. Way simpler.",
      },
      {
        o: "What if I don't qualify?",
        r: "Then you take the loan like you planned. But if you qualify, you get more money. Why not check?",
      },
    ],
    tips: [
      "Make loan sound complicated",
      "Present cash as obviously better",
      "Use Americo for cash-out",
      "Create health urgency",
    ],
  },

  "non-insurance": {
    script: `Okay thank you for your patience, [CLIENT_NAME].

Let's get this squared away. But before I do, I saw something odd. It looks like you haven't activated all of your benefits. Americo was trying to reach you - you had access to a final expense burial policy that was going to protect your family from having to pay funeral costs when you pass away, but it was returned as no-response or decline. I'm confused why you wouldn't have activated that when you had the chance.

You never got it? When's the last time you spoke to your agent? You haven't?? This looks like an expired option. Somebody dropped the ball. Let me look into this.

[Quick Hold]

Okay, I can't make promises but I'm going to see if I can get this activated. I was instructed to see if you can qualify, and if you do, I have a shot. If all goes well we'll get this policy activated and you won't have to worry about your family's financial situation if something happens to you.`,
    objections: [
      {
        o: "I just called for service",
        r: "I know. But I'd hate for you to miss saving money. Takes 90 seconds. If there's nothing, I'll tell you.",
      },
      {
        o: "I don't have time",
        r: "This is 2 minutes and could save hundreds per year. Want me to call back next week or just do it now?",
      },
      {
        o: "Not interested",
        r: "No problem. But this is based on your current age and health. It goes away if anything changes. Can I at least tell you what I see?",
      },
    ],
    tips: [
      "ALWAYS handle service first",
      "Natural transition to sales",
      "Every call = sales opportunity",
      "Document everything",
    ],
  },
};

// Context Calculator - Global scope
function getContext() {
  const clientName =
    document.getElementById("clientName")?.value || "[CLIENT_NAME]";
  const clientAge =
    document.getElementById("clientAge")?.value || "[CLIENT_AGE]";
  const coverage = document.getElementById("coverage")?.value || "[COVERAGE]";
  const premium = document.getElementById("premium")?.value || "[PREMIUM]";
  const carrier = document.getElementById("carrier")?.value || "[CARRIER]";
  const agentName =
    document.getElementById("agentName")?.value || "[AGENT_NAME]";
  const newPremium =
    document.getElementById("newPremium")?.value || "[NEW_PREMIUM]";
  const additionalPremium =
    document.getElementById("additionalPremium")?.value ||
    "[ADDITIONAL_PREMIUM]";
  const cashAmount =
    document.getElementById("cashAmount")?.value || "[CASH_AMOUNT]";
  const savings = document.getElementById("savings")?.value || "[SAVINGS]";
  const beneficiary =
    document.getElementById("beneficiary")?.value || "[BENEFICIARY]";
  const agencyName =
    document.getElementById("agencyName")?.value || "Family First Life";

  const coverageClean = coverage.replace(/[$,]/g, "");
  const coverageWithDollar = coverage.includes("$") ? coverage : `$${coverage}`;
  const premiumWithDollar = premium.includes("$") ? premium : `$${premium}`;
  const newPremiumWithDollar = newPremium.includes("$")
    ? newPremium
    : `$${newPremium}`;
  const additionalPremiumWithDollar = additionalPremium.includes("$")
    ? additionalPremium
    : `$${additionalPremium}`;
  const cashAmountWithDollar = cashAmount.includes("$")
    ? cashAmount
    : `$${cashAmount}`;
  const savingsWithDollar = savings.includes("$") ? savings : `$${savings}`;

  const coverageNumeric = parseFloat(coverage.replace(/[^0-9.]/g, "")) || 25000;
  const newCoverageNumeric = coverageNumeric + 5000;
  const newCoverageWithDollar = `$${newCoverageNumeric.toLocaleString()}`;

  const savingsNumeric = parseFloat(savings.replace(/[^0-9.]/g, "")) || 25;
  const twentyYearSavings = `$${(savingsNumeric * 12 * 20).toLocaleString()}`;

  return {
    "[CLIENT_NAME]": clientName,
    "[CLIENT_AGE]": clientAge,
    "[COVERAGE]": coverageClean,
    "[COVERAGE_WITH_DOLLAR]": coverageWithDollar,
    "[NEW_COVERAGE]": newCoverageWithDollar,
    "[PREMIUM]": premiumWithDollar,
    "[CARRIER]": carrier,
    "[AGENT_NAME]": agentName,
    "[NEW_PREMIUM]": newPremiumWithDollar,
    "[LOWER_PREMIUM]": newPremiumWithDollar,
    "[ADDITIONAL_PREMIUM]": additionalPremiumWithDollar,
    "[CASH_AMOUNT]": cashAmountWithDollar,
    "[SAVINGS]": savingsWithDollar,
    "[20_YEAR_SAVINGS]": twentyYearSavings,
    "[CUSTOMER_ISSUE]": "(their request)",
    "[REASON_FOR_CALL]": "(reason for call)",
    "[BENEFICIARY]": beneficiary,
    "[AGENCY_NAME]": agencyName,
  };
}

function applyContext(text, context) {
  let result = text;
  for (const [key, value] of Object.entries(context)) {
    result = result.replace(
      new RegExp(key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "g"),
      value,
    );
  }
  return result;
}

// Main Functions - Global scope
window.selectCallType = function (type, button) {
  console.log("🎯 selectCallType called with:", type);

  if (!window.callScripts) {
    console.error("❌ ERROR: window.callScripts is undefined!");
    alert("Error: Scripts not loaded. Please refresh the page.");
    return;
  }

  if (!window.callScripts[type]) {
    console.error("❌ ERROR: No script found for type:", type);
    alert(`Error: No script found for ${type}`);
    return;
  }

  currentCallType = type;
  console.log("✅ Current call type set to:", currentCallType);

  document
    .querySelectorAll(".call-type-btn")
    .forEach((btn) => btn.classList.remove("active"));
  button.classList.add("active");

  localStorage.setItem("quickpitch_callType", type);

  console.log("🔄 Calling renderScript...");
  window.renderScript();
};

window.renderScript = function () {
  console.log("📝 renderScript called for:", currentCallType);
  const container = document.getElementById("scriptContent");
  if (!container) {
    console.error("❌ scriptContent container not found!");
    return;
  }

  if (!currentCallType || !window.callScripts[currentCallType]) {
    console.log("ℹ️ No call type selected, showing empty state");
    container.innerHTML = `<div class="empty-state"><div class="empty-state-icon">📋</div><div>Select a call type above to load your professional script</div></div>`;
    return;
  }

  console.log("✅ Rendering script for:", currentCallType);

  const script = window.callScripts[currentCallType];
  const context = getContext();
  const callTypeTitle = currentCallType
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  let scriptText = applyContext(script.script, context);
  scriptText = scriptText.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");

  scriptText = scriptText
    .split("\n")
    .map((line) => {
      if (line.startsWith("<strong>") && line.includes(":</strong>")) {
        const headerText = line
          .replace("<strong>", "")
          .replace(":</strong>", "");
        return `<div style="color: #c41e3a; font-weight: 700; margin-top: 20px; margin-bottom: 10px; font-size: 1.1em;">${headerText}:</div>`;
      }
      if (line.includes('"')) {
        line = line.replace(
          /"([^"]+)"/g,
          '<span style="color: #1976d2; font-style: italic;">"$1"</span>',
        );
      }
      return line;
    })
    .join("<br>");

  container.innerHTML = `<div class="script-content"><h3>📞 YOUR SCRIPT - ${callTypeTitle}</h3><div class="script-text">${scriptText}</div></div>`;
  console.log("✅ Script rendered successfully!");
};

window.copyScript = function () {
  const scriptElement = document.querySelector(".script-text");
  if (!scriptElement) {
    alert("Please select a call type first");
    return;
  }
  const content = scriptElement.innerText || scriptElement.textContent;
  navigator.clipboard.writeText(content).then(() => {
    const toast = document.getElementById("copiedToast");
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  });
};

window.printScript = function () {
  window.print();
};

window.showCarriers = function () {
  let html =
    '<div style="margin-bottom: 20px; padding: 15px; background: #fff3cd; border-radius: 10px;"><strong>🎯 CARRIER PREFERENCE ORDER:</strong></div>';
  carrierInfo.forEach((carrier) => {
    html += `<div class="carrier-item"><div class="carrier-name">${carrier.name}</div><div style="color: #1976d2;">📞 ${carrier.phone}</div><div><strong>Products:</strong> ${carrier.products}</div><div style="color: #e65100;"><strong>Commission:</strong> ${carrier.commission}</div><div style="color: #666; font-style: italic;">${carrier.notes}</div></div>`;
  });
  document.getElementById("carriersList").innerHTML = html;
  document.getElementById("carriersModal").classList.add("show");
};

window.showObjections = function () {
  if (!currentCallType || !window.callScripts[currentCallType]) {
    alert("Please select a call type first");
    return;
  }
  const objections = window.callScripts[currentCallType].objections;
  const context = getContext();
  let html = "";
  objections.forEach((obj) => {
    html += `<div class="objection-item"><div class="objection-question">Client: "${obj.o}"</div><div><strong>Your Response:</strong> ${applyContext(obj.r, context)}</div></div>`;
  });
  document.getElementById("objectionList").innerHTML = html;
  document.getElementById("objectionModal").classList.add("show");
};

window.showCompliance = function () {
  let html = `<div class="compliance-item"><div class="compliance-header">⚠️ CRITICAL CALLBACK RULE</div><div>${complianceRules.callbackRule}</div></div>`;
  html +=
    '<div class="compliance-item"><div class="compliance-header">✅ WHAT YOU MUST DO</div><ul style="margin-left: 20px; line-height: 1.8;">';
  complianceRules.mustDo.forEach((rule) => {
    html += `<li>${rule}</li>`;
  });
  html += "</ul></div>";
  html +=
    '<div class="compliance-item"><div class="compliance-header">❌ WHAT YOU CANNOT DO</div><ul style="margin-left: 20px; line-height: 1.8;">';
  complianceRules.cannotDo.forEach((rule) => {
    html += `<li>${rule}</li>`;
  });
  html += "</ul></div>";
  document.getElementById("complianceList").innerHTML = html;
  document.getElementById("complianceModal").classList.add("show");
};

window.showTips = function () {
  if (!currentCallType || !window.callScripts[currentCallType]) {
    alert("Please select a call type first");
    return;
  }
  const tips = window.callScripts[currentCallType].tips;
  let html =
    '<div style="margin-bottom: 20px; padding: 15px; background: #d4edda; border-radius: 10px;"><strong>💡 KEY SUCCESS STRATEGIES:</strong></div>';
  tips.forEach((tip, index) => {
    html += `<div class="tip-item"><strong>${index + 1}.</strong> ${tip}</div>`;
  });
  document.getElementById("tipsList").innerHTML = html;
  document.getElementById("tipsModal").classList.add("show");
};

window.closeModal = function (modalId) {
  document.getElementById(modalId).classList.remove("show");
};

window.clearAllData = function () {
  if (confirm("Clear all client data and start fresh?")) {
    [
      "clientName",
      "clientAge",
      "coverage",
      "premium",
      "carrier",
      "agentName",
      "newPremium",
      "additionalPremium",
      "cashAmount",
      "savings",
      "beneficiary",
      "agencyName",
    ].forEach((id) => {
      const element = document.getElementById(id);
      if (element) element.value = "";
      localStorage.removeItem(`quickpitch_${id}`);
    });
    currentCallType = null;
    localStorage.removeItem("quickpitch_callType");
    document
      .querySelectorAll(".call-type-btn")
      .forEach((btn) => btn.classList.remove("active"));
    const container = document.getElementById("scriptContent");
    if (container) {
      container.innerHTML =
        '<div class="empty-state"><div class="empty-state-icon">📋</div><div>Select a call type above to load your professional script</div></div>';
    }
    const toast = document.getElementById("copiedToast");
    toast.textContent = "✅ All data cleared!";
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 2000);
  }
};

window.saveCallToHistory = function () {
  const clientName = document.getElementById("clientName")?.value;
  if (!clientName || !currentCallType) {
    alert("Please enter client name and select a call type first");
    return;
  }
  const callData = {
    name: clientName,
    age: document.getElementById("clientAge")?.value,
    coverage: document.getElementById("coverage")?.value,
    premium: document.getElementById("premium")?.value,
    carrier: document.getElementById("carrier")?.value,
    agentName: document.getElementById("agentName")?.value,
    newPremium: document.getElementById("newPremium")?.value,
    additionalPremium: document.getElementById("additionalPremium")?.value,
    cashAmount: document.getElementById("cashAmount")?.value,
    savings: document.getElementById("savings")?.value,
    beneficiary: document.getElementById("beneficiary")?.value,
    agencyName: document.getElementById("agencyName")?.value,
    callType: currentCallType,
    timestamp: new Date().toISOString(),
  };
  let history = JSON.parse(localStorage.getItem("quickpitch_history") || "[]");
  history.unshift(callData);
  history = history.slice(0, 10);
  localStorage.setItem("quickpitch_history", JSON.stringify(history));
  if (window.populateRecentClients) window.populateRecentClients();
  const toast = document.getElementById("copiedToast");
  toast.textContent = "✅ Call saved to history!";
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2000);
};

window.populateRecentClients = function () {
  const dropdown = document.getElementById("recentClients");
  if (!dropdown) return;
  const history = JSON.parse(
    localStorage.getItem("quickpitch_history") || "[]",
  );
  dropdown.innerHTML = '<option value="">📋 Recent Clients...</option>';
  history.forEach((call, index) => {
    const date = new Date(call.timestamp).toLocaleDateString();
    const callTypeLabel = call.callType
      .replace(/-/g, " ")
      .replace(/\b\w/g, (l) => l.toUpperCase());
    const option = document.createElement("option");
    option.value = index;
    option.textContent = `${call.name} - ${date} - ${callTypeLabel}`;
    dropdown.appendChild(option);
  });
};

window.loadRecentClient = function () {
  const dropdown = document.getElementById("recentClients");
  const index = dropdown.value;
  if (index === "") return;
  const history = JSON.parse(
    localStorage.getItem("quickpitch_history") || "[]",
  );
  const call = history[index];
  if (!call) return;
  document.getElementById("clientName").value = call.name || "";
  document.getElementById("clientAge").value = call.age || "";
  document.getElementById("coverage").value = call.coverage || "";
  document.getElementById("premium").value = call.premium || "";
  document.getElementById("carrier").value = call.carrier || "";
  document.getElementById("agentName").value = call.agentName || "";
  document.getElementById("newPremium").value = call.newPremium || "";
  document.getElementById("additionalPremium").value =
    call.additionalPremium || "";
  document.getElementById("cashAmount").value = call.cashAmount || "";
  document.getElementById("savings").value = call.savings || "";
  if (document.getElementById("beneficiary"))
    document.getElementById("beneficiary").value = call.beneficiary || "";
  if (document.getElementById("agencyName"))
    document.getElementById("agencyName").value = call.agencyName || "";
  currentCallType = call.callType;
  localStorage.setItem("quickpitch_callType", call.callType);
  document
    .querySelectorAll(".call-type-btn")
    .forEach((btn) => btn.classList.remove("active"));
  const button = document.querySelector(`[onclick*="${call.callType}"]`);
  if (button) button.classList.add("active");
  window.renderScript();
  dropdown.value = "";
};

// Load saved data
function loadFormData() {
  [
    "clientName",
    "clientAge",
    "coverage",
    "premium",
    "carrier",
    "agentName",
    "newPremium",
    "additionalPremium",
    "cashAmount",
    "savings",
    "beneficiary",
    "agencyName",
  ].forEach((id) => {
    const element = document.getElementById(id);
    const savedValue = localStorage.getItem(`quickpitch_${id}`);
    if (element && savedValue) element.value = savedValue;
  });
  const savedCallType = localStorage.getItem("quickpitch_callType");
  if (savedCallType) {
    currentCallType = savedCallType;
    const button = document.querySelector(`[onclick*="${savedCallType}"]`);
    if (button) {
      button.classList.add("active");
      window.renderScript();
    }
  }
}

function saveFormData() {
  [
    "clientName",
    "clientAge",
    "coverage",
    "premium",
    "carrier",
    "agentName",
    "newPremium",
    "additionalPremium",
    "cashAmount",
    "savings",
    "beneficiary",
    "agencyName",
  ].forEach((id) => {
    const element = document.getElementById(id);
    if (element) localStorage.setItem(`quickpitch_${id}`, element.value);
  });
  if (currentCallType)
    localStorage.setItem("quickpitch_callType", currentCallType);
}

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

const debouncedRenderScript = debounce(window.renderScript, 300);

// Initialize on DOM ready
document.addEventListener("DOMContentLoaded", function () {
  console.log("🚀 QuickPitch Scripts Loaded - Ring Fex Edition v2.0");
  console.log(
    "📊 Available call types:",
    Object.keys(window.callScripts || {}),
  );
  console.log("🔧 Functions check:", {
    selectCallType: typeof window.selectCallType === "function" ? "✅" : "❌",
    renderScript: typeof window.renderScript === "function" ? "✅" : "❌",
    copyScript: typeof window.copyScript === "function" ? "✅" : "❌",
    showCarriers: typeof window.showCarriers === "function" ? "✅" : "❌",
    showObjections: typeof window.showObjections === "function" ? "✅" : "❌",
    showCompliance: typeof window.showCompliance === "function" ? "✅" : "❌",
    showTips: typeof window.showTips === "function" ? "✅" : "❌",
  });

  // Initialize
  loadFormData();
  if (window.populateRecentClients) window.populateRecentClients();

  // Event listeners
  [
    "clientName",
    "clientAge",
    "coverage",
    "premium",
    "carrier",
    "agentName",
    "newPremium",
    "additionalPremium",
    "cashAmount",
    "savings",
    "beneficiary",
    "agencyName",
  ].forEach((id) => {
    const element = document.getElementById(id);
    if (element) {
      element.addEventListener("input", () => {
        saveFormData();
        debouncedRenderScript();
      });
    }
  });

  // Modal close on background click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) modal.classList.remove("show");
    });
  });

  // Keyboard shortcuts
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document
        .querySelectorAll(".modal.show")
        .forEach((modal) => modal.classList.remove("show"));
    }
  });

  console.log("✅ QuickPitch Scripts Initialization Complete!");
});
