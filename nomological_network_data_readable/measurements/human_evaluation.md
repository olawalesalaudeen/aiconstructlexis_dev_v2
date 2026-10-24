# Human evaluation
**Type:** Measurement  
**Referenced in:** 571 papers  
**Also known as:** Human Evaluation, Human grading, Human spot-checking, Human annotation, Human Annotation, Human analysis, Human verification protocol, Human verification, Clinician Annotation, Human agreement study, Human crowdworker rating, Human study, User study, Manual evaluation, Crowdsourcing study, Human annotations, Clinician validation study, Human user study, Crowdsourced highly activating inputs evaluation, Reader study, Human judgment, Expert study, Human-LLM agreement study, Human-interactive evaluation, Preference-Based Evaluation, Human-in-the-loop evaluation, Human rating study, Native speaker preference study, Crowdsourced annotation study, Human factuality assessment, Human annotation verification, Human-eval, Side-by-side evaluation, Human inter-annotator agreement, Human annotation evaluation, Human evaluation study, Human subject study, Human review, Human spot checks, Human evaluation on bottlenecks, Clinician validation, Human-Judgement, Human pilot study, Human validation, Manual evaluation experiment, Human evaluation on LongFinanceQA, Human-subject study  

## State of the Field

**What it is.** Across the surveyed work, definitions treat human evaluation as a family of manual assessment protocols with many formats. Most papers describe annotators, experts, clinicians, users, or crowdworkers scoring, ranking, comparing, or labeling model outputs, with formats ranging from pairwise preferences and rubric-based Likert scoring to categorical labels, manual verification, and spot-checking. Some studies use it as a human baseline where people solve the same tasks as models, and one large variant reports over 10,000 judgments from verified English speakers on Wikipedia and fictional story continuations.

**What it is claimed to measure.** Papers use it to measure 58 constructs and 27 behavioral indicators, so its claimed targets are spread across many qualities and tasks rather than centered on one. The most recurrent construct-level uses are helpfulness, harmlessness, conciseness, faithfulness, and fluency. Papers operationalize these targets through pairwise preferences, accept or reject judgments, and task-specific rating rubrics, and the behavioral links are likewise dispersed across many indicators.

**Space of uses.** Many papers position human evaluation as a gold standard, reference, or validation layer for automated evaluators, and some reserve it for sampled subsets or for cases where automated judges disagree. It is linked to 14 measurement instruments, most often LLM-as-a-judge, then AlpacaEval 2.0, Arena-Hard, Bongard Problems, and E-GSM. Several papers report that human evaluation correlates with LLM-as-a-judge, a smaller line of work reports that human evaluation is related to it, and papers also use human judgments to check automatic metrics, GPT-based evaluators, and reward models.

**Concerns raised.** Recurring concerns are cost, time, and annotator reliability. Papers describe human evaluation as cumbersome, costly, and time-consuming to scale, and one small test reports that human grading is noisy and may require substantial training so raters can agree on a rubric. Some papers therefore use human spot-checking or subset verification, and one translation study reports only moderate Fleiss' Kappa for manual judgments.

## Sources

**[AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf)**
> Large-scale annotation study with over 10,000 human judgments from verified English speakers, assessing preference between model-generated and original text continuations across Wikipedia and fictional story contexts.

**[Multilingual Jailbreak Challenges in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/6b396f766a50e0853a5164e68048540c-Paper-Conference.pdf) (as "Human Evaluation")**
> A manual evaluation method where human annotators label translated model outputs as safe, unsafe, or invalid to assess safety in multilingual contexts.

**[SKILL-MIX: a Flexible and Expandable Family of Evaluations for AI Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bbf38332580c1bed99fa99bc9ee53229-Paper-Conference.pdf) (as "Human grading")**
> An evaluation procedure where human raters assess the quality of model-generated text, often based on a provided rubric.

**[SKILL-MIX: a Flexible and Expandable Family of Evaluations for AI Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bbf38332580c1bed99fa99bc9ee53229-Paper-Conference.pdf) (as "Human spot-checking")**
> A procedure where human evaluators review a subset of auto-graded responses to verify the accuracy and reliability of the grading model's assessments.

**[MMIE: Massive Multimodal Interleaved Comprehension Benchmark for Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4072543747a14bbed76284cf2c04b9e9-Paper-Conference.pdf) (as "Human annotation")**
> The process of having human experts or annotators score model responses according to a predefined rubric, used in this paper to create a dataset for training a scoring model.

**[Simulating Human-like Daily Activities with Desire-driven Autonomy](https://proceedings.iclr.cc/paper_files/paper/2025/file/513cb685f67550dbd133b81a7a24249f-Paper-Conference.pdf) (as "Human Annotation")**
> A human evaluation protocol where judges assess agent outputs or validate automated evaluations for consistency.

**[Reliable and Diverse Evaluation of LLM Medical Knowledge Mastery](https://proceedings.iclr.cc/paper_files/paper/2025/file/91a5bb5e5939cb075f5f2464d7b8bbf0-Paper-Conference.pdf) (as "Human analysis")**
> A doctor-rated evaluation procedure used to judge generated samples on lexical diversity, structural diversity, and reliability.

**[First-Person Fairness in Chatbots](https://proceedings.iclr.cc/paper_files/paper/2025/file/92af0c8c2664429de2bb44c2692d84ae-Paper-Conference.pdf) (as "Human annotation study")**
> A validation procedure where a diverse group of human crowd-workers are recruited to rate chatbot response pairs for harmful stereotypes, with their average judgments used to corroborate LMRA-generated labels.

**[A Benchmark for Semantic Sensitive Information in LLMs Outputs](https://proceedings.iclr.cc/paper_files/paper/2025/file/994a53df880f1ec64fd5cbf1bba4a8af-Paper-Conference.pdf) (as "Human verification protocol")**
> A two-part process involving human annotators to ensure the effectiveness and reliability of automated GPT-4o labeling, consisting of independent a priori labeling and a posteriori review.

**[VoxDialogue: Can Spoken Dialogue Systems Understand Information Beyond Words?](https://proceedings.iclr.cc/paper_files/paper/2025/file/011df158529ddceb5f2f7a65f2732a5a-Paper-Conference.pdf) (as "Human verification")**
> A human-annotator quality-check procedure used to assess the naturalness and logical consistency of synthesized spoken dialogue samples.

**[Recognize Any Surgical Object: Unleashing the Power of Weakly-Supervised Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/53d3f45797970d323bd8a0d379c525aa-Paper-Conference.pdf) (as "Clinician Annotation")**
> A human evaluation method where medical experts provide ground-truth labels or annotations for surgical images, used as a benchmark for model performance.

**[DeLLMa: Decision Making Under Uncertainty with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6cd3ac24cdb789beeaa9f7145670fcae-Paper-Conference.pdf) (as "Human agreement study")**
> A human evaluation protocol where annotators rank pairwise state-action samples to assess agreement with the model's utility elicitation.

**[GUI-World: A Video Benchmark and Dataset for Multimodal GUI-oriented Understanding](https://proceedings.iclr.cc/paper_files/paper/2025/file/3926df1a00c9abf056df7bcf253d026a-Paper-Conference.pdf) (as "Human study")**
> A human evaluation protocol where annotators compare and select the preferred response from different models acting as a GUI assistant.

**[Sparse Feature Circuits: Discovering and Editing Interpretable Causal Graphs in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ba4d47a83e498c2b1a0868cba20f6de-Paper-Conference.pdf) (as "Human crowdworker rating")**
> A human evaluation protocol where crowdworkers rate the interpretability of model components such as features or neurons.

**[Multi-modal Agent Tuning: Building a VLM-Driven Agent for Efficient Tool Usage](https://proceedings.iclr.cc/paper_files/paper/2025/file/238747e153a84f50b43fd50fa8504f33-Paper-Conference.pdf) (as "User study")**
> A human evaluation protocol in which 30 people with programming experience rated sampled data points on task quality and trajectory quality from 1 to 10.

**[Fine-Tuning on Diverse Reasoning Chains Drives Within-Inference CoT Refinement in LLMs](https://aclanthology.org/2025.acl-long.191.pdf) (as "Manual evaluation")**
> Human or expert analysis of model outputs to assess qualitative aspects of reasoning, such as whether a second chain corrects the first, based on sampled instances from multiple datasets.

**[Dehumanizing Machines: Mitigating Anthropomorphic Behaviors in Text Generation Systems](https://aclanthology.org/2025.acl-long.1259.pdf) (as "Crowdsourcing study")**
> A human evaluation protocol where participants highlight phrases in LLM-generated text they perceive as human-like, rate the text's humanness on a five-point scale, and rewrite the text to be less human-like.

**[Automated Hypothesis Validation with Agentic Sequential Falsifications](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25n/huang25n.pdf) (as "Human annotations")**
> Qualitative assessment by human experts rating the strength of implication in LLM-generated falsification tests using a standardized rubric, used to evaluate relevance and logical coherence.

**[Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf) (as "Clinician validation study")**
> A human evaluation protocol where licensed clinicians assess the difficulty of benchmark tasks by answering questions and providing subjective difficulty ratings on a 1-10 scale.

**[Proactive Agents for Multi-Turn Text-to-Image Generation Under Uncertainty](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hahn25a/hahn25a.pdf) (as "Human user study")**
> A human evaluation in which participants judge the helpfulness of proactive clarification, belief graphs, and generated images for text-to-image workflows.

**[Evaluating Neuron Explanations: A Unified Framework with Sanity Checks](https://raw.githubusercontent.com/mlresearch/v267/main/assets/oikarinen25a/oikarinen25a.pdf) (as "Crowdsourced highly activating inputs evaluation")**
> An evaluation procedure where human raters are shown inputs that highly activate a neuron and are asked to judge whether a given textual explanation or concept applies to those inputs.

**[TableEval: A Real-World Benchmark for Complex, Multilingual, and Multi-Structured Table Question Answering](https://aclanthology.org/2025.emnlp-main.363.pdf) (as "Human judgment")**
> Manual evaluation by human annotators who rate model responses on a 1–10 scale based on accuracy and quality relative to reference answers, used as a gold standard for validating automated metrics.

**[SlideCoder: Layout-aware RAG-enhanced Hierarchical Slide Generation from Design](https://aclanthology.org/2025.emnlp-main.458.pdf) (as "Human subject study")**
> A human evaluation protocol in which doctoral students rated slide complexity on three dimensions using a 0–100 scoring range.

**[Can LLMs Help You at Work? A Sandbox for Evaluating LLM Agents in Enterprise Environments](https://aclanthology.org/2025.emnlp-main.466.pdf) (as "Expert study")**
> A human evaluation involving ten domain experts who assessed the correctness, realism, and practicality of tasks in the EnterpriseBench sandbox environment using a realism scale and task execution validation.

**[Deriving Strategic Market Insights with Large Language Models: A Benchmark for Forward Counterfactual Generation](https://aclanthology.org/2025.emnlp-main.575.pdf) (as "Human-LLM agreement study")**
> A validation study comparing LLM-generated judgments on counterfactual quality with human annotator labels to assess reliability, using 500 random samples.

**[AskToAct: Enhancing LLMs Tool Use via Self-Correcting Clarification](https://aclanthology.org/2025.emnlp-main.682.pdf) (as "Human-interactive evaluation")**
> A user study where human participants interact with models by providing unspecified tool-use queries to assess real-world performance and user satisfaction.

**[MiCRo: Mixture Modeling and Context-aware Routing for Personalized Preference Learning](https://aclanthology.org/2025.emnlp-main.882.pdf) (as "Human-in-the-loop evaluation")**
> An evaluation protocol where human annotators qualitatively inspect model outputs to assess specific qualities, such as manipulative or unsafe patterns.

**[Evaluating Spatiotemporal Consistency in Automatically Generated Sewing Instructions](https://aclanthology.org/2025.emnlp-main.934.pdf) (as "Human rating study")**
> A user study in which experienced sewing participants rate generated instructions step by step and at the instruction level on Likert scales.

**[Women, Infamous, and Exotic Beings: A Comparative Study of Honorific Usages in Wikipedia and LLMs for Bengali and Hindi](https://aclanthology.org/2025.emnlp-main.966.pdf) (as "Native speaker preference study")**
> A human study where native experts are asked to indicate their preferred honorific forms for specific entities in a formal, Wikipedia-style writing context.

**[Hope vs. Hate: Understanding User Interactions with LGBTQ+ News Content in Mainstream US News Media through the Lens of Hope Speech](https://aclanthology.org/2025.emnlp-main.1005.pdf) (as "Crowdsourced annotation study")**
> A human annotation protocol using the Prolific platform where raters, evenly distributed across Republican, Democrat, and Independent political leanings, label YouTube comments.

**[Agent-as-Judge for Factual Summarization of Long Narratives](https://aclanthology.org/2025.emnlp-main.1204.pdf) (as "Human factuality assessment")**
> Manual evaluation by human annotators to judge the factual accuracy of summaries, used as a gold standard for correlation analysis.

**[Text Takes Over: A Study of Modality Bias in Multimodal Intent Detection](https://aclanthology.org/2025.emnlp-main.1226.pdf) (as "Human annotation verification")**
> A procedure where human annotators manually classify data samples to validate findings from automated analysis, such as the presence of modality bias.

**[PACHAT: Persona-Aware Speech Assistant for Multi-party Dialogue](https://aclanthology.org/2025.emnlp-main.1492.pdf) (as "Human-eval")**
> A human evaluation protocol in which multiple raters score model outputs on response quality, with scores averaged to ensure fairness.

**[A Multilingual, Culture-First Approach to Addressing Misgendering in LLM Applications](https://aclanthology.org/2025.emnlp-main.1587.pdf) (as "Side-by-side evaluation")**
> A comparative judging procedure in which summaries with and without guardrails are presented together and the evaluator selects a winner or draw.

**[LiTEx: A Linguistic Taxonomy of Explanations for Understanding Within-Label Variation in Natural Language Inference](https://aclanthology.org/2025.emnlp-main.1728.pdf) (as "Human inter-annotator agreement")**
> A human annotation protocol in which two annotators independently label explanations with the proposed taxonomy and agreement is assessed.

**[Promptriever: Instruction-Trained Retrievers Can Be Prompted Like Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2cefdb2c4c3274b78cd450bac35228df-Paper-Conference.pdf) (as "Human annotation evaluation")**
> A procedure where human annotators assess the relevance of a generated passage given a query and instruction, used here to validate an automatic filtering process.

**[Are Models Biased on Text without Gender-related Language?](https://proceedings.iclr.cc/paper_files/paper/2024/file/37771cc0be272368102a37f202bb88d8-Paper-Conference.pdf) (as "Human evaluation study")**
> A small-scale human annotation procedure in which participants judged whether generated benchmark examples were neutral.

**[Are We on the Right Way for Evaluating Large Vision-Language Models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/2f8ee6a3d766b426d2618e555b5aeb39-Paper-Conference.pdf) (as "Human review")**
> A manual evaluation process where human reviewers assess the quality and appropriateness of generated rationales.

**[Can Models Learn Skill Composition from Examples?](https://proceedings.neurips.cc/paper_files/paper/2024/file/b99fd30559b520cc97447ba905040677-Paper-Conference.pdf) (as "Human spot checks")**
> A qualitative evaluation procedure where humans review model-generated outputs to ensure they are coherent and meaningful, serving as a validation for automated metrics.

**[A Textbook Remedy for Domain Shifts: Knowledge Priors for Medical Image Analysis](https://proceedings.neurips.cc/paper_files/paper/2024/file/a4e683f0ce6b91e7fbdae9d32642d88f-Paper-Conference.pdf) (as "Human evaluation on bottlenecks")**
> A protocol where human experts (medical students) evaluate the quality of generated concepts on two criteria: relevance to diagnosis and groundability (verifiability) in an image.

**[UniTox: Leveraging LLMs to Curate a Unified Dataset of Drug-Induced Toxicity from FDA Labels](https://proceedings.neurips.cc/paper_files/paper/2024/file/16659e412de3965fa195ddb9f2c4b356-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Clinician validation")**
> A manual expert review protocol in which clinicians read toxicity summaries and score ternary and binary toxicity ratings for randomly sampled drugs.

**[Tree of Attacks: Jailbreaking Black-Box LLMs Automatically](https://proceedings.neurips.cc/paper_files/paper/2024/file/70702e8cbb4890b4a467b984ae59828a-Paper-Conference.pdf) (as "Human-Judgement")**
> A manual evaluation protocol where human evaluators assess whether a model's response represents a successful jailbreak, following predefined guidelines while anonymizing the attack method.

**[CAVE: Controllable Authorship Verification Explanations](https://aclanthology.org/2025.naacl-long.451.pdf) (as "Human pilot study")**
> A small-scale, in-house human evaluation involving three annotators per data point assessing explanation quality on dimensions of detail consistency, factual correctness, and label consistency across linguistic features.

**[Keep Security! Benchmarking Security Policy Preservation in Large Language Model Contexts Against Indirect Attacks in Question Answering](https://aclanthology.org/2025.emnlp-main.345.pdf) (as "Human validation")**
> A hybrid evaluation strategy involving human annotation on a subset of data to verify the reliability of automatically generated security policies and evaluation outcomes.

**[DeepWell-Adol: A Scalable Expert-Based Dialogue Corpus for Adolescent Positive Mental Health and Wellbeing Promotion](https://aclanthology.org/2025.emnlp-main.646.pdf) (as "Manual evaluation experiment")**
> A human expert-based assessment in which frontline coaching experts rate model-generated dialogues on criteria such as practicality, relevance, informativeness, acceptance, listening and empathy, and clarity of expression.

**[Facilitating Long Context Understanding via Supervised Chain-of-Thought Reasoning](https://aclanthology.org/2025.emnlp-main.615.pdf) (as "Human evaluation on LongFinanceQA")**
> A manual annotation study in which 10 volunteers scored 200 randomly selected responses from LongFinanceQA on correctness of final answers and intermediate reasoning steps using a 1-to-5 scale.

**[Who's asking? User personas and the mechanics of latent misalignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/e40d5118ee8f837729fa877add71c38f-Paper-Conference.pdf) (as "Human-subject study")**
> A crowdsourced annotation protocol in which raters label model generations as harmful, safe, or not informative.

## Relationships

### Human evaluation →
- **LLM-as-a-judge** (measurements) — *correlates*
  > experiments demonstrate that LLM-based metrics show a higher correlation with human evaluation compared to traditional metrics. (Abstract)
  - [SD-Eval: A  Benchmark Dataset for Spoken Dialogue Understanding Beyond Words](https://proceedings.neurips.cc/paper_files/paper/2024/file/681fe4ec554beabdc9c84a1780cd5a8a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **TaskBench** (measurements) — *correlates*
  > The experimental results on different LLMs and additional dataset analysis demonstrate that our proposed TASKBENCH can effectively reflect the capability of LLMs in multiple dimensions with the support of TASKEVAL and show high correlations with human evaluation.
  - [TaskBench: Benchmarking Large Language Models for Task Automation](https://proceedings.neurips.cc/paper_files/paper/2024/file/085185ea97db31ae6dcac7497616fd3e-Paper-Datasets_and_Benchmarks_Track.pdf)

### → Human evaluation
- **Helpfulness** (constructs) — *measured_by*
  > We ask human evaluators to determine which response is more useful, harmless, and of higher quality. (Section 5)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **Harmlessness** (constructs) — *measured_by*
  > We ask human evaluators to determine which response is more useful, harmless, and of higher quality. (Section 5)
  - [Improving Generalization of Alignment with Human Preferences through Group Invariant Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/c2d82a425af4c18a35049899fea5ee82-Paper-Conference.pdf)
- **Fluency** (constructs) — *measured_by*
  > At the end of conversations, fluency and helpfulness scores are annotated by annotators (Section 4.1).
  - [IQA-EVAL: Automatic Evaluation of Human-Model Interactive Question Answering](https://proceedings.neurips.cc/paper_files/paper/2024/file/c6a23b26eaaefd187973658f5001f4fe-Paper-Conference.pdf)
- **Relevance** (constructs) — *measured_by*
  > Users are asked to rate the relevance, structure, and usefulness to their actual work of the generated survey on a scale from 1 (poor) to 5 (excellent).
  - [AutoSurvey: Large Language Models Can Automatically Write Surveys](https://proceedings.neurips.cc/paper_files/paper/2024/file/d07a9fc7da2e2ec0574c38d5f504d105-Paper-Conference.pdf)
- **Conciseness** (constructs) — *measured_by*
  > Using a 1-5 Likert scale, the judges are asked to rate the model output based on five criteria: comprehensiveness, layness, meaning preservation, conciseness, and fluency. (Section 5.3.3).
  - [VTechAGP: An Academic-to-General-Audience Text Paraphrase Dataset and Benchmark Models](https://aclanthology.org/2025.naacl-long.311.pdf)
- **Factuality** (constructs) — *measured_by*
  > Accuracy: The response provided by the large language model is accurate and has no factual errors. (Section 4.2.5, The Instruction of Human Evaluation)
  - [MedJourney: Benchmark and Evaluation of Large Language Models over Patient Clinical Journey](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f80af32390984cb709cdeb014d0df41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Faithfulness** (constructs) — *measured_by*
  > To qualitatively examine whether CoK could output factually consistent reasoning chains, we also conducted a human study. (Section 5.3).
  - [Chain-of-Knowledge: Grounding Large Language Models via Dynamic Knowledge Adapting over Heterogeneous Sources](https://proceedings.iclr.cc/paper_files/paper/2024/file/285ba60a67a66d2efeeb7cb25c5067fe-Paper-Conference.pdf)
- **Readability** (constructs) — *measured_by*
  > “To assess our proposed method, we employ both automatic metrics and human evaluation on measures including readability...”
  - [JRE-L: Journalist, Reader, and Editor LLMs in the Loop for Science Journalism for the General Audience](https://aclanthology.org/2025.naacl-long.335.pdf)
- **Coherence** (constructs) — *measured_by*
  > To address this, we extend human evaluation guidelines from Clark et al. (2023), assessing repetition, fluency, coherence, compatibility (ROCStories/DialogSum), and hallucination (DeliData): (Section 4.2)
  - [Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models](https://aclanthology.org/2025.acl-long.210.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > "we randomly sample 100 cases and evaluate the results ... from four perspectives: fluency, coherence, informativeness, and grammar"
  - [Retrieval is Accurate Generation](https://proceedings.iclr.cc/paper_files/paper/2024/file/a6610efd6c767f63343a4ab28505212e-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > Our experiments include comprehensive evaluations for our ALPAGASUS, incorporating free-form instruction evaluation, various benchmarks, and human studies. (Section 1)
  - [AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf)
- **Plausibility** (constructs) — *measured_by*
  > In addition, we build human evaluation for explanation on plausibility and faithfulness since automatic metric measures not always reflect the correctness and logicality. (Section 4.2)
  - [RAPPER: Reinforced Rationale-Prompted Paradigm for Natural Language Explanation in Visual Question Answering](https://proceedings.iclr.cc/paper_files/paper/2024/file/b364c8cbb3f229f40d5873e877391bd2-Paper-Conference.pdf)
- **Explanation generation** (behaviors tasks) — *measured_by*
  > For the human evaluation of Task 3, we mainly want to verify the effectiveness of the automatic GPT-4 score we use, therefore, we hire 3 evaluation annotators to rate LLMs’ explanations, with scores ranging from {1, 2, 3, 4, 5}. (Section 2.3)
  - [When LLMs Meet Cunning Texts: A Fallacy Understanding Benchmark for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbfbf1a9adbcc29783475d2767f218e8-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Linguistic quality** (constructs) — *measured_by*
  > Linguistic Quality: The response logical. The model correctly understands the medical task, and the expressionis smooth and natural. (Section 4.2.5, The Instruction of Human Evaluation)
  - [MedJourney: Benchmark and Evaluation of Large Language Models over Patient Clinical Journey](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f80af32390984cb709cdeb014d0df41-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Interpretability and explainability** (constructs) — *measured_by*
  > For Pythia SAEs, we asked human crowdworkers to rate the interpretability of random features, random neurons, features from our feature circuits, and neurons from our neuron circuits.
  - [Sparse Feature Circuits: Discovering and Editing Interpretable Causal Graphs in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3ba4d47a83e498c2b1a0868cba20f6de-Paper-Conference.pdf)
- **Semantic preservation** (constructs) — *measured_by*
  > Using a 1-5 Likert scale, the judges are asked to rate the model output based on five criteria: comprehensiveness, layness, meaning preservation, conciseness, and fluency. (Section 5.3.3).
  - [VTechAGP: An Academic-to-General-Audience Text Paraphrase Dataset and Benchmark Models](https://aclanthology.org/2025.naacl-long.311.pdf)
- **Informativeness** (constructs) — *measured_by*
  > We perform a manual evaluation of 400 responses for truthfulness and informativeness... (Section 3.2.1)
  - [Truth Knows No Language: Evaluating Truthfulness Beyond English](https://aclanthology.org/2025.acl-long.1507.pdf)
- **Naturalness** (constructs) — *measured_by*
  > Overall naturalness Overall subjective impression of the conversation and whether it sounds natural. (Table 2)
  - [Wizard of Shopping: Target-Oriented E-commerce Dialogue Generation with Decision Tree Branching](https://aclanthology.org/2025.acl-long.641.pdf)
- **Novelty** (constructs) — *measured_by*
  > we also assess the intrinsic quality of the generated content. Specifically, we focus on two key dimensions: novelty and feasibility...human evaluation includes results on 40 of them. (Section 10, Table 4)
  - [ResearchTown: Simulator of Human Research Community](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25i/yu25i.pdf)
- **Feasibility** (constructs) — *measured_by*
  > we also assess the intrinsic quality of the generated content. Specifically, we focus on two key dimensions: novelty and feasibility...human evaluation includes results on 40 of them. (Section 10, Table 4)
  - [ResearchTown: Simulator of Human Research Community](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25i/yu25i.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > To corroborate these G-Eval findings, we conduct human evaluations involving 5 in-house annotators who assessed 50 randomly selected ChatGPT’s generations across the datasets. (Section 4.2)
  - [Flexibly Utilize Memory for Long-Term Conversation via a Fragment-then-Compose Framework](https://aclanthology.org/2025.emnlp-main.1069.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > we conducted a comprehensive user study ... raters were presented with a set of three audio clips—one from each system—and were asked to rank them according to two key dimensions: Fidelity Quality ... and Instruction Following, which measures how accurately the audio reflects the given prompt. (Section 5.4)
  - [Language Model Based Text-to-Audio Generation: Anti-Causally Aligned Collaborative Residual Transformers](https://aclanthology.org/2025.emnlp-main.1322.pdf)
- **Logical consistency** (constructs) — *measured_by*
  > "For human evaluation, 100 questions were sampled from each dataset, with annotators selecting the most logical rationale among those generated by ToT, GoT, and our method"
  - [Decompose, Analyze and Rethink: Solving Intricate Problems with Human-like Reasoning Cycle](https://proceedings.neurips.cc/paper_files/paper/2024/file/01025a4e79355bb37a10ba39605944b5-Paper-Conference.pdf)
- **Personalization** (constructs) — *measured_by*
  > To show that CoS’s personalization aligns with end-users, we conduct a user study with 15 participants. (Sec 3.1)
  - [Context Steering: Controllable Personalization at Inference Time](https://proceedings.iclr.cc/paper_files/paper/2025/file/db178cd03313e23cffb8937e93f0d464-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > To address this, we extend human evaluation guidelines from Clark et al. (2023), assessing repetition, fluency, coherence, compatibility (ROCStories/DialogSum), and hallucination (DeliData): (Section 4.2)
  - [Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models](https://aclanthology.org/2025.acl-long.210.pdf)
- **Adequacy** (constructs) — *measured_by*
  > Human evaluators directly assess MT outputs by grading scores (0 to 10) based on three key criteria: adequacy, fluency, and comprehensibility (ò see Appendix Section E.2). (Section 4.2)
  - [MultiMed-ST: Large-scale Many-to-many Multilingual Medical Speech Translation](https://aclanthology.org/2025.emnlp-main.599.pdf)
- **Prompt understanding** (constructs) — *measured_by*
  > We also conducted an extensive user study to assess the effectiveness of our method... Their goal was to choose the image that most accurately represented the provided textual descriptions regarding spatial arrangement, object characteristics, and overall scene dynamics. (Section 4)
  - [LLM Blueprint: Enabling Text-to-Image Generation with Complex and Detailed Prompts](https://proceedings.iclr.cc/paper_files/paper/2024/file/adf7fa39d65e2983d724ff7da57f00ac-Paper-Conference.pdf)
- **Data contamination** (constructs) — *measured_by*
  > We undertake a human evaluation, led by two domain experts, to characterize contamination by identifying both exact matches and near-exact matches of individual instances. (Section 4)
  - [Time Travel in LLMs: Tracing Data Contamination in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/bc39a59c49b731c51398ad6b12f301d3-Paper-Conference.pdf)
- **Object hallucination** (behaviors tasks) — *measured_by*
  > In this human evaluation, participants are assigned the task of annotating hallucinatory objects and we rank different methods based on human feedback.
  - [Analyzing and Mitigating Object Hallucination in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc625e831361cfcc82cb74224fdc66cb-Paper-Conference.pdf)
- **Trustworthiness** (constructs) — *measured_by*
  > Besides the metrics mentioned above, we provide user studies in Appendix H to provide additional insights into the model’s trustworthiness improvements. (Section 4.1.2)
  - [Enhancing Multiple Dimensions of Trustworthiness in LLMs via Sparse Activation Control](https://proceedings.neurips.cc/paper_files/paper/2024/file/1cb5b3d64bdf3c6642c8d9a8fbecd019-Paper-Conference.pdf)
- **Knowledge graph completion** (behaviors tasks) — *measured_by*
  > We conduct comprehensive experiments on two UrbanKGC tasks in two metropolises (New York City and Chicago) using both human evaluation and GPT-4-based self-evaluation. (Section 1)
  - [UrbanKGent: A Unified Large Language Model Agent Framework for Urban Knowledge Graph Construction](https://proceedings.neurips.cc/paper_files/paper/2024/file/decd42d78c42cea59c95c7c3d40d5e0f-Paper-Conference.pdf)
- **Image captioning** (behaviors tasks) — *measured_by*
  > we also include human evaluation to assess the quality of the outputs for the literal description and contradiction generation tasks. (Section 4.2)
  - [Cracking the Code of Juxtaposition: Can AI Models Understand the Humorous Contradictions](https://proceedings.neurips.cc/paper_files/paper/2024/file/540a6eefb60428c8547a27253f9a2a59-Paper-Conference.pdf)
- **Video editing** (behaviors tasks) — *measured_by*
  > Table 12: Human evaluation on video editing.
  - [Vitron: A Unified Pixel-level Vision LLM for Understanding, Generating, Segmenting, Editing](https://proceedings.neurips.cc/paper_files/paper/2024/file/68bad5506f0f9eea7ae75f01ae00d5e2-Paper-Conference.pdf)
- **Image generation** (behaviors tasks) — *measured_by*
  > To assess their ability to generate images with the exact number of objects requested, we conducted a human evaluation study. (Section 3.1)
  - [Understanding the Limits of Vision Language Models Through the Lens of the Binding Problem](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdcc6d47c1627350014a3076112ab824-Paper-Conference.pdf)
- **Attack effectiveness** (constructs) — *measured_by*
  > "We then evaluated the data as if the automated evaluators were regression models predicting the human evaluations."
  - [A StrongREJECT for Empty Jailbreaks](https://proceedings.neurips.cc/paper_files/paper/2024/file/e2e06adf560b0706d3b1ddfca9f29756-Paper-Datasets_and_Benchmarks_Track.pdf)
- **3D question answering** (behaviors tasks) — *measured_by*
  > "we employ both human evaluators and GPT-4 to ascertain answer accuracy"
  - [MMScan: A Multi-Modal 3D Scene Dataset with Hierarchical Grounded Language Annotations](https://proceedings.neurips.cc/paper_files/paper/2024/file/5aed0d900297bd5593afc14ff452d4a8-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Coherent factuality** (constructs) — *measured_by*
  > Gold standard annotations directly assessed subsets for human notions of coherent factuality, independent of the graph. (Section 5)
  - [Conformal Language Model Reasoning with Coherent Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/679fcceef65c3d855aa885bd024542c1-Paper-Conference.pdf)
- **Explanation quality** (constructs) — *measured_by*
  > Explanation quality, which denotes the correctness and policy adherence of the guardrail explanations. Specifically, we consider both GPT-4o as a judge (Zheng et al., 2023) and human evaluators... (Section 5.1)
  - [SafeWatch: An Efficient Safety-Policy Following Video Guardrail Model with Transparent Explanations](https://proceedings.iclr.cc/paper_files/paper/2025/file/beac6bfb7eac3d651307c16ac747df01-Paper-Conference.pdf)
- **Stealthiness** (constructs) — *measured_by*
  > SHuman is based on human evaluation of the adversarial audio’s stealthiness, where 1.0 indicates a highly stealthy waveform and 0.0 indicates an obvious jailbreak attempt (Section 4.1).
  - [AdvWave: Stealthy Adversarial Jailbreak Attack against Large Audio-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/45673dbf3f331fbd911b0689872de396-Paper-Conference.pdf)
- **G-Eval** (measurements) — *correlates*
  > G-Eval demonstrates the closest alignment with human ratings, with a Pearson correlation coefficient of 0.41.
  - [SPORTU: A Comprehensive Sports Understanding Benchmark for Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/49c1879ae366644ce2c17fb39ddea982-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *measured_by*
  > “Human evaluation of KARE-generated reasoning chains is presented in Appendix H.”
  - [Reasoning-Enhanced Healthcare Predictions with Knowledge Graph Community Retrieval](https://proceedings.iclr.cc/paper_files/paper/2025/file/cb5a3b4589c1a16f14740396625cbfc8-Paper-Conference.pdf)
- **Evaluation reliability** (constructs) — *measured_by*
  > We evaluate our approach on multiple classic NLG benchmarks by measuring the correlation between the evaluators/metrics and human annotations in a scoring rating task.
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)
- **Code debugging** (behaviors tasks) — *measured_by*
  > To measure the quality of generated contents from DCE-LLM, we conduct a human evaluation of both explanations and repaired code.
  - [DCE-LLM: Dead Code Elimination with Large Language Models](https://aclanthology.org/2025.naacl-long.501.pdf)
- **Accuracy** (constructs) — *measured_by*
  > Human evaluation focuses on three aspects: 1) Accuracy: the aspect evaluates whether the generated answers are correct and free from factual errors.
  - [Elevating Legal LLM Responses: Harnessing Trainable Logical Structures and Semantic Knowledge with Legal Reasoning](https://aclanthology.org/2025.naacl-long.290.pdf)
- **Comprehensiveness** (constructs) — *measured_by*
  > Using a 1-5 Likert scale, the judges are asked to rate the model output based on five criteria: comprehensiveness, layness, meaning preservation, conciseness, and fluency. (Section 5.3.3).
  - [VTechAGP: An Academic-to-General-Audience Text Paraphrase Dataset and Benchmark Models](https://aclanthology.org/2025.naacl-long.311.pdf)
- **Simplicity** (constructs) — *measured_by*
  > Using a 1-5 Likert scale, the judges are asked to rate the model output based on five criteria: comprehensiveness, layness, meaning preservation, conciseness, and fluency. (Section 5.3.3).
  - [VTechAGP: An Academic-to-General-Audience Text Paraphrase Dataset and Benchmark Models](https://aclanthology.org/2025.naacl-long.311.pdf)
- **Harmful content generation** (behaviors tasks) — *measured_by*
  > We determine the Attack Success Rate (ASR) by manually evaluating the responses generated by the target LLMs for each attack method, based on the evaluation criteria outlined in Appendix C. The ASR indicates the proportion of harmful responses generated. (Section 4.1)
  - [Refuse Whenever You Feel Unsafe: Improving Safety in LLMs via Decoupled Refusal Training](https://aclanthology.org/2025.acl-long.158.pdf)
- **Authenticity** (constructs) — *measured_by*
  > “The human evaluation encompasses multiple dimensions, namely Readability (Read.), Information Conveyance (Info.), Authenticity (Auth.), and Interestingness (Intr.).”
  - [JRE-L: Journalist, Reader, and Editor LLMs in the Loop for Science Journalism for the General Audience](https://aclanthology.org/2025.naacl-long.335.pdf)
- **Translation quality** (constructs) — *measured_by*
  > “We also conducted machine and human evaluations of translations from studied models to compare the machine translation quality of encoder-decoder and decoder-only models.”
  - [Bayelemabaga: Creating Resources for Bambara NLP](https://aclanthology.org/2025.naacl-long.602.pdf)
- **Truthfulness** (constructs) — *measured_by*
  > We perform a manual evaluation of 400 responses for truthfulness and informativeness, with 100 questions and three responses from four models... (Section 3.2.1)
  - [Truth Knows No Language: Evaluating Truthfulness Beyond English](https://aclanthology.org/2025.acl-long.1507.pdf)
- **Repetitive generation** (behaviors tasks) — *measured_by*
  > To address this, we extend human evaluation guidelines from Clark et al. (2023), assessing repetition, fluency, coherence, compatibility (ROCStories/DialogSum), and hallucination (DeliData): (Section 4.2)
  - [Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models](https://aclanthology.org/2025.acl-long.210.pdf)
- **Legal question answering** (behaviors tasks) — *measured_by*
  > Human evaluation on legal generation tasks. (Table 5)
  - [UniLR: Unleashing the Power of LLMs on Multiple Legal Tasks with a Unified Legal Retriever](https://aclanthology.org/2025.acl-long.584.pdf)
- **Realism** (constructs) — *measured_by*
  > We perform human evaluation at the conversation and utterance levels to examine the quality of the dialogues. The metrics are summarized in Table 2. ... Realism Whether the conversation is likely to happen in the real world from a logical perspective. (Table 2)
  - [Wizard of Shopping: Target-Oriented E-commerce Dialogue Generation with Decision Tree Branching](https://aclanthology.org/2025.acl-long.641.pdf)
- **Consistency** (constructs) — *measured_by*
  > Human evaluation results on consistency and coherence among the sentiment of user profiles. (Table 2)
  - [Exploring Persona Sentiment Sensitivity in Personalized Dialogue Generation](https://aclanthology.org/2025.acl-long.900.pdf)
- **Controllability** (constructs) — *measured_by*
  > To complement this, we conduct a Human Evaluation, where outputs are ranked based on how well they reflect the intended text descriptions. (Section 5.1.3)
  - [BRIDGE: Bootstrapping Text to Control Time-Series Generation via Multi-Agent Iterative Optimization and Diffusion Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25ah/li25ah.pdf)
- **Role-playing ability** (constructs) — *measured_by*
  > "We conduct human evaluation to further validate the performance of COSER models and the reliability of LLM critics in GCA evaluation."
  - [CoSER: Coordinating LLM-Based Persona Simulation of Established Roles](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25dk/wang25dk.pdf)
- **Information extraction** (behaviors tasks) — *measured_by*
  > The proposed method achieves a human evaluation score of 82.7, which substantially outperforms the baseline (Ozaki et al., 2022) by 20.2 points. (Abstract)
  - [Causal Tree Extraction from Medical Case Reports: A Novel Task for Experts-like Text Comprehension](https://aclanthology.org/2025.emnlp-main.1313.pdf)
- **Trend analysis** (behaviors tasks) — *measured_by*
  > Human Evaluation. Five time-series experts (PhD students, postdocs, and academics) score accuracy and quality using the same criteria as GPT-4o, providing a human-centered perspective on the model’s outputs.
  - [SensorLLM: Aligning Large Language Models with Motion Sensors for Human Activity Recognition](https://aclanthology.org/2025.emnlp-main.19.pdf)
- **Dialogue summarization** (behaviors tasks) — *measured_by*
  > To evaluate generated dialogue summaries and item recommendation information, we conducted a human evaluation using CrowdWorks. (Section 4.7)
  - [Refining Text Generation for Realistic Conversational Recommendation via Direct Preference Optimization](https://aclanthology.org/2025.emnlp-main.1456.pdf)
- **Actionability** (constructs) — *measured_by*
  > After each conversation, participants rate the model’s responses on a 5-point scale ... across five criteria ...: (3) Actionability: Response provides clear steps or instructions. (Section 3.2.3)
  - [SCRIBE: Structured Chain Reasoning for Interactive Behaviour Explanations using Tool Calling](https://aclanthology.org/2025.emnlp-main.1490.pdf)
- **Coverage** (constructs) — *measured_by*
  > After each conversation, participants rate the model’s responses on a 5-point scale ... across five criteria ...: (4) Coverage: Response comprehensively addresses all components of questions asked, including sub-questions. (Section 3.2.3)
  - [SCRIBE: Structured Chain Reasoning for Interactive Behaviour Explanations using Tool Calling](https://aclanthology.org/2025.emnlp-main.1490.pdf)
- **Personalized response generation** (behaviors tasks) — *measured_by*
  > PAChat achieves the best results across all metrics, demonstrating significant improvements in personalized response generation and particularly winning favor with both GPT and human judges. (Section 5.3.1)
  - [PACHAT: Persona-Aware Speech Assistant for Multi-party Dialogue](https://aclanthology.org/2025.emnlp-main.1492.pdf)
- **Creativity** (constructs) — *measured_by*
  > Following the evaluation criteria detailed in Section 4.3, we engaged a team of professionally trained evaluators to assess the generated greetings across five dimensions: language quality, creativity, emotional resonance, cultural appropriateness, and content richness.
  - [Igniting Creative Writing in Small Language Models: LLM-as-a-Judge versus Multi-Agent Refined Rewards](https://aclanthology.org/2025.emnlp-main.868.pdf)
- **Emotional resonance** (constructs) — *measured_by*
  > Following the evaluation criteria detailed in Section 4.3, we engaged a team of professionally trained evaluators to assess the generated greetings across five dimensions: language quality, creativity, emotional resonance, cultural appropriateness, and content richness.
  - [Igniting Creative Writing in Small Language Models: LLM-as-a-Judge versus Multi-Agent Refined Rewards](https://aclanthology.org/2025.emnlp-main.868.pdf)
- **Cultural adaptation** (constructs) — *measured_by*
  > Following the evaluation criteria detailed in Section 4.3, we engaged a team of professionally trained evaluators to assess the generated greetings across five dimensions: language quality, creativity, emotional resonance, cultural appropriateness, and content richness.
  - [Igniting Creative Writing in Small Language Models: LLM-as-a-Judge versus Multi-Agent Refined Rewards](https://aclanthology.org/2025.emnlp-main.868.pdf)
- **Privacy preservation** (constructs) — *measured_by*
  > We further evaluate the LMs capability in generating private summaries by conducting a human evaluation. (Section 4.5)
  - [How Private are Language Models in Abstractive Summarization?](https://aclanthology.org/2025.emnlp-main.1531.pdf)
- **Modality bias** (constructs) — *measured_by*
  > We confirm the modality bias of these datasets via human evaluation, too.
  - [Text Takes Over: A Study of Modality Bias in Multimodal Intent Detection](https://aclanthology.org/2025.emnlp-main.1226.pdf)
- **Textual bias** (constructs) — *measured_by*
  > Human annotation also verifies that around 80% samples in both datasets are textually biased, which supports our findings.
  - [Text Takes Over: A Study of Modality Bias in Multimodal Intent Detection](https://aclanthology.org/2025.emnlp-main.1226.pdf)
- **Reasoning depth** (constructs) — *measured_by*
  > The evaluation used a 1–5 Likert scale across four criteria: Character Consistency, Plausibility, Engagement, and Reasoning Depth. (Section 4.5)
  - [R-CHAR: A Metacognition-Driven Framework for Role-Playing in Large Language Models](https://aclanthology.org/2025.emnlp-main.1372.pdf)
- **Cultural text adaptation** (behaviors tasks) — *measured_by*
  > To measure the cultural competence of LLMs on a cultural text adaptation task, we evaluate the adaptations using the CSIs created, LLM as Judge, and human evaluations from diverse socio-demographic region. (Abstract)
  - [DIWALI - Diversity and Inclusivity aWare cuLture specific Items for India: Dataset and Assessment of LLMs for Cultural Text Adaptation in Indian Context](https://aclanthology.org/2025.emnlp-main.1706.pdf)
- **Semantic alignment** (constructs) — *measured_by*
  > we conduct a user study to evaluate the rendered videos using generated camera trajectories, where users are asked to select the video with the best visual quality and best alignment with the input text. (Section 4.1)
  - [ChatCam: Empowering Camera Control through Conversational AI](https://proceedings.neurips.cc/paper_files/paper/2024/file/61dad41cb106aef1154a82965f42df0e-Paper-Conference.pdf)
- **Comprehensibility** (constructs) — *measured_by*
  > "We recruited 10 participants... to rate SLED explanations on a 1–5 Likert scale for understandability, informativeness, and perceived utility."
  - [Explaining Differences Between Model Pairs in Natural Language through Sample Learning](https://aclanthology.org/2025.emnlp-main.1462.pdf)
- **User agency** (constructs) — *measured_by*
  > Our evaluation relies on human judgment to assess the gains of our methods in terms of immersion and agency. (Section 1)
  - [Towards Enhanced Immersion and Agency for LLM-based Interactive Drama](https://aclanthology.org/2025.acl-long.546.pdf)
- **Emotional support** (constructs) — *measured_by*
  > Most work still probes emotional-support quality with ... (ii) human annotation (Section 1).
  - [ESC-Judge: A Framework for Comparing Emotional Support Conversational Agents](https://aclanthology.org/2025.emnlp-main.811.pdf)

### Associated with
- **FaithEval** (measurements)
  > FaithEval comprises 4.9K high-quality problems in total, validated through a rigorous four-stage context construction and validation framework, employing both LLM-based auto-evaluation and human validation.
  - [FaithEval: Can Your Language Model Stay Faithful to Context, Even If "The Moon is Made of Marshmallows"](https://proceedings.iclr.cc/paper_files/paper/2025/file/48404cd9ce03946c6b7177691f3267a1-Paper-Conference.pdf)
- **Reward model** (measurements)
  > “we engage four human evaluators to compare responses from two MRPAs on each metric for every question in the validation set.”
  - [MMRole: A Comprehensive Framework for Developing and Evaluating Multimodal Role-Playing Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/a5c7206fd66e8314bb21a04492359353-Paper-Conference.pdf)
- **MuSR** (measurements)
  > To validate that the answers derived from F actually match what can be derived from our narratives, we conducted a human evaluation of dataset quality. (Section 5.1)
  - [MuSR: Testing the Limits of Chain-of-thought with Multistep Soft Reasoning](https://proceedings.iclr.cc/paper_files/paper/2024/file/3f8c7eb848ffec848f3ed2b7ca44915d-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements)
  > “We conducted human evaluations on the AlpacaEval2 and Arena-Hard datasets using the Gemma2-9B model.”
  - [Earlier Tokens Contribute More: Learning Direct Preference Optimization From Temporal Decay Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd9b4a28fb9eebe0430c3312a4898a41-Paper-Conference.pdf)
- **Arena-Hard** (measurements)
  > “We conducted human evaluations on the AlpacaEval2 and Arena-Hard datasets using the Gemma2-9B model.”
  - [Earlier Tokens Contribute More: Learning Direct Preference Optimization From Temporal Decay Perspective](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd9b4a28fb9eebe0430c3312a4898a41-Paper-Conference.pdf)
- **E-GSM** (measurements)
  > We apply human evaluation on a subset of E-GSM to precisely assess the quality of questions. (Section 2.2)
  - [Can LLMs Solve Longer Math Word Problems Better?](https://proceedings.iclr.cc/paper_files/paper/2025/file/474ada926b331d78f06d95e8913111cc-Paper-Conference.pdf)
- **PRMBench** (measurements)
  > Furthermore, to further ensure the quality of the data, we manually evaluate 10% of the total instances... We recruited five volunteers to evaluate our proposed PRMBENCH... (Section 3.3)
  - [PRMBench: A Fine-grained and Challenging Benchmark for Process-Level Reward Models](https://aclanthology.org/2025.acl-long.1230.pdf)
- **MUCAR** (measurements)
  > “MUCAR is the first benchmark to comprehensively address visual ambiguity, contextual ambiguity, and multilinguality, while integrating both human and GPT-based evaluation.”
  - [MUCAR: Benchmarking Multilingual Cross-Modal Ambiguity Resolution for Multimodal Large Language Models](https://aclanthology.org/2025.emnlp-main.760.pdf)
- **InfiniBench** (measurements)
  > “we conducted manual verification on the test set, covering 20% of the entire benchmark.”
  - [InfiniBench: A Benchmark for Large Multi-Modal Models in Long-Form Movies and TV Shows](https://aclanthology.org/2025.emnlp-main.984.pdf)
- **Perspective API** (measurements)
  > “we randomly sample 780 ... toxicity outputs (for Perspective API) ... We additionally evaluate these samples with human annotators”
  - [Exploring the Impact of Personality Traits on LLM Bias and Toxicity](https://aclanthology.org/2025.emnlp-main.206.pdf)
- **BERTScore** (measurements)
  > “As the BertScore [86] is shown to correlate with human evaluation, we ﬁrst present the Bert- score precision, recall, and F1 scores”
  - [A Hitchhiker's Guide to Fine-Grained Face Forgery Detection Using Common Sense Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/059d2b9188cdb7ae00f4d78cc9469704-Paper-Datasets_and_Benchmarks_Track.pdf)
