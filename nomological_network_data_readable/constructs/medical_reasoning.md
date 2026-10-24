# Medical reasoning
**Type:** Construct  
**Referenced in:** 15 papers  
**Also known as:** Diagnostic reasoning, Scenario-based problem solving  

## State of the Field

**Definition agreement:** Consensus. Most papers define medical reasoning as a model's underlying cognitive ability to apply medical knowledge and clinical logic in multi-step inference over patient information, especially for diagnosis. A few papers broaden the setting to prognosis, visual integration, question answering, or realistic clinical workflows, but these are variations in scope and examples of the same core property rather than different phenomena.

**Space of definitions.** Across papers, the dominant framing treats medical reasoning as a latent or cognitive ability for complex, domain-specific reasoning and inference in medicine, usually to support analysis and diagnosis. A common narrower usage labels this diagnostic reasoning and defines it as analyzing patient information, considering differential diagnoses, and inferring an accurate or likely diagnosis from patient data, explicitly contrasted with mere factual recall or pattern matching. A smaller line of work broadens or reframes the construct as scenario-based problem solving in realistic clinical workflows, involving multi-step planning, ordering examinations, and making diagnoses, and one professional-level formulation also includes prognostic thinking and integration of visual information with specialized medical knowledge.

**Space of facets.** Systematizations in the papers mainly sort the construct by scope. Some authors use nearby labels, especially diagnostic reasoning, for a diagnosis-centered version, while others describe a broader professional-level form that is multi-step and may cover both diagnosis and prognosis, or place it at an "L3" scenario-based problem solving level where models plan in realistic clinical workflows, order examinations, and handle diagnosis and treatment tasks. The clearest boundary drawn in the papers is against factual recall or pattern matching, which one paper treats as distinct from the reasoning ability of interest.

**Space of measurement.** Papers operationalize the construct with 3 linked measurement instruments: MedQA, DDXPlus, and MOLERR2FIX, with MedQA appearing most often. The recorded descriptions make these instruments concrete as USMLE-based multiple-choice questions for medical reasoning and knowledge, clinical vignettes evaluating diagnostic reasoning in a clinical-like setting, and a benchmark that directly assesses diagnostic reasoning and reliability in a chemically grounded setting. These measures mostly emphasize diagnosis-centered performance, which matches the narrower diagnostic reasoning definitions more closely than the broader versions that also mention prognosis, visual integration, or question answering.

**Links.** Outside measurement, papers link medical reasoning to 1 construct and 1 behavioral indicator. It is related to interpretability and explainability: papers argue that evaluating interpretability in LLM-based medical NLP should count both reading the record and reasoning from observations to disease, and they describe explainability into a model's diagnostic reasoning process. It is also related to medical diagnosis, with one paper using a full-path clinical diagnosis task to assess scenario-based problem solving; no causal or correlational claims are recorded.

## Sources

**[Biomedical Visual Instruction Tuning with Clinician Preference Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/aec33ab89b5986605cd7c331396e7e5c-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The ability to perform complex, domain-specific reasoning and inference to support medical analysis and diagnostic tasks.

**[MedJourney: Benchmark and Evaluation of Large Language Models over Patient Clinical Journey](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f80af32390984cb709cdeb014d0df41-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Diagnostic reasoning")**
> The cognitive ability to analyze patient information, consider differential diagnoses, and arrive at a likely medical diagnosis.

**[Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf) (as "Scenario-based problem solving")**
> The latent ability to plan and solve problems in realistic medical scenarios by integrating information across multiple steps, ordering examinations, and making diagnoses under conditions that simulate real-world clinical workflows.

## Relationships

### Medical reasoning →
- **MedQA** (measurements) — *measured_by*
  > “MedQA was constructed from USMLE questions to evaluate the medical reasoning and knowledge of LLMs in a multiple-choice format.”
  - [Position: Medical Large Language Model Benchmarks Should Prioritize Construct Validity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/alaa25a/alaa25a.pdf)
- **DDXPlus** (measurements) — *measured_by*
  > DDXPlus [73]... involve clinical vignettes... evaluating the AI’s diagnostic reasoning abilities similar to a clinical setting (Section 4.1).
  - [MDAgents: An Adaptive Collaboration of LLMs for Medical Decision-Making](https://proceedings.neurips.cc/paper_files/paper/2024/file/90d1fc07f46e31387978b88e7e057a31-Paper-Conference.pdf)

### Associated with
- **Interpretability and explainability** (constructs)
  > This observation suggests that both perception, or reading (e.g., finding necessary information in the medical record) and reasoning (determining the disease based on the observations) should be counted when evaluating interpretability in LLM-based medical NLP tasks. (Section 1)
  - [DiReCT: Diagnostic Reasoning for Clinical Notes via Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/892850bf793e03b5c410dfd9425b94c8-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Medical diagnosis** (behaviors tasks)
  > For High-Level tasks (f3), we follow Hager et al. (2024) and assess LLMs’ capabilities of solving scenario-based problems using a full-path clinical diagnosis task, as illustrated in Figure 3. (Section 3.3)
  - [Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf)
