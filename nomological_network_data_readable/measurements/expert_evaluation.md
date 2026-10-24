# Expert evaluation
**Type:** Measurement  
**Referenced in:** 91 papers  
**Also known as:** Human expert evaluation, Expert annotation, Human expert annotation, Expert relevance annotation, Expert explanation evaluation, Expert annotation evaluation, Expert verification evaluation, Clinical reader study, Physician reader study, Human expert review, Expert review, Expert human evaluation, Clinician evaluation, Domain-expert evaluation, Domain scholar evaluation, Pilot expert validation, Human-as-a-Judge, Human expert validation, Domain expert evaluation  

## State of the Field

**What it is.** Across papers, the prevailing usage is a human evaluation protocol in which domain experts review model outputs or benchmark items against ground truth, predefined criteria, or paired alternatives. Definitions vary in who the evaluators are, from SQL experts, medical professionals, clinicians, radiologists, legal experts, translators, psychotherapists, and domain researchers to trained students or native speakers in some studies, and the format also varies, including independent judgments, pairwise comparisons, blind or randomized reader studies, rubric or Likert scoring, and consensus adjudication. A smaller line of work uses the same label for expert annotation or validation of benchmark data, unit tests, captions, or adversarial items, and some papers use it to establish human performance baselines on sampled benchmark questions.

**What it is claimed to measure.** Across papers, expert evaluation is used to measure 9 constructs and 3 behavioral indicators, so the recorded measurement claims are spread across many targets rather than centered on one. The most frequently listed construct links are Accuracy and Clinical interpretability, with 7 other constructs also linked, and the behavioral-indicator links are Calculation error, Experimental design, and Reasoning error. Papers therefore use it both for broad quality judgments and for targeted error analysis.

**Space of uses.** In instrument-to-instrument links, EHRNoteQA and LexEval are measured by expert evaluation, LLM-as-a-judge is reported to correlate with it, and GAVIE is related to it, with one paper stating that it aligns with human evaluation. More broadly, papers often position expert evaluation as a manual check on automated metrics, labels, or generated outputs, and some use it as a human baseline for benchmark difficulty or model comparison.

**Concerns raised.** The explicit issues papers raise are mainly about agreement and bias. Several protocols use independent reviewers with consensus adjudication, and some adopt blind or randomized review, with one study saying blind review is used to minimize bias. One paper also treats the lack of direct expert review as a limitation, noting that clinical interpretability and reliability had not yet been directly assessed through expert review.

## Sources

**[Are Multimodal LLMs Robust Against Adversarial Perturbations? RoMMath: A Systematic Evaluation on Multimodal Math Reasoning](https://aclanthology.org/2025.naacl-long.582.pdf) (as "Human expert evaluation")**
> A process where human experts with extensive SQL experience independently evaluate the semantic correctness of generated queries, with discrepancies resolved through consensus.

**[MedTrinity-25M: A Large-scale Multimodal Dataset with Multigranular Annotations for Medicine](https://proceedings.iclr.cc/paper_files/paper/2025/file/11c483499c285f30daf832c17dc752bd-Paper-Conference.pdf)**
> A human evaluation protocol in which medical professionals assess the accuracy of generated descriptions against ground-truth annotations.

**[CompA: Addressing the Gap in Compositional Reasoning in Audio-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/43c18853329c7504996b255252b6cb1f-Paper-Conference.pdf) (as "Expert annotation")**
> A human evaluation procedure in which subject-matter experts annotate audio events and validate or correct captions for benchmark and training data.

**[DarkBench: Benchmarking Dark Patterns in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/6f6421fbc2351067ef9c75e4bcd12af5-Paper-Conference.pdf) (as "Human expert annotation")**
> An evaluation procedure where human experts in a specific domain review and validate model outputs or automated annotations.

**[From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf) (as "Expert relevance annotation")**
> A human evaluation protocol where domain experts (senior medical students) annotate the relevance of microtheory facts for a specific task (USMLE tests) using a 5-point rubric.

**[Decision Information Meets Large Language Models: The Future of Explainable Operations Research](https://proceedings.iclr.cc/paper_files/paper/2025/file/a48e5877c7bf86a513950ab23b360498-Paper-Conference.pdf) (as "Expert explanation evaluation")**
> A human blind review protocol where OR experts anonymously score the explanations generated by different methods.

**[MMLU-ProX: A Multilingual Benchmark for Advanced Large Language Model Evaluation](https://aclanthology.org/2025.emnlp-main.79.pdf) (as "Expert verification evaluation")**
> Human evaluation in which professional translators assess translation quality on accuracy, fluency, and completeness using a 5-point Likert scale.

**[Tree-of-Quote Prompting Improves Factuality and Attribution in Multi-Hop and Medical Reasoning](https://aclanthology.org/2025.emnlp-main.285.pdf) (as "Clinical reader study")**
> A human evaluation involving clinicians who score model outputs on correctness, completeness, and logical flow using USMLE-style questions from MedQA.

**[Process-Supervised Reward Models for Verifying Clinical Note Generation: A Scalable Approach Guided by Domain Expertise](https://aclanthology.org/2025.emnlp-main.967.pdf) (as "Physician reader study")**
> Human evaluation involving nine physicians who assessed the quality of clinical notes selected by different PRM checkpoints through blinded, randomized review.

**[Structuring Radiology Reports: Challenging LLMs with Lightweight Models](https://aclanthology.org/2025.emnlp-main.392.pdf) (as "Human expert review")**
> An evaluation protocol where five board-certified radiologists assessed 223 generated reports for errors and adherence to a predefined template compared to their original free-form counterparts.

**[X-FLoRA: Cross-modal Federated Learning with Modality-expert LoRA for Medical VQA](https://aclanthology.org/2025.emnlp-main.422.pdf) (as "Expert review")**
> A human evaluation protocol where domain experts, such as radiologists or physicians, assess the quality, clinical alignment, and reliability of model-generated responses.

**[CoCoLex: Confidence-guided Copy-based Decoding for Grounded Legal Text Generation](https://aclanthology.org/2025.acl-long.931.pdf) (as "Expert human evaluation")**
> A human evaluation protocol where a legal expert assesses model-generated responses on a 5-point Likert scale across criteria including correctness, faithfulness, fluency, and coherence.

**[uMedSum: A Unified Framework for Clinical Abstractive Summarization](https://aclanthology.org/2025.acl-long.134.pdf) (as "Clinician evaluation")**
> A human evaluation protocol where domain experts (in this case, two orthopaedic surgeons) perform pairwise comparisons of summaries based on overall quality and annotate errors like confabulations or missing information.

**[Tree-of-Debate: Multi-Persona Debate Trees Elicit Critical Thinking for Scientific Comparative Analysis](https://aclanthology.org/2025.acl-long.1422.pdf) (as "Domain-expert evaluation")**
> A human evaluation protocol where researchers with deep expertise in a specific field assess the quality of model outputs, such as comparative summaries, based on criteria like factuality, breadth, and contextualization.

**[OntologyRAG-Q: Resource Development and Benchmarking for Retrieval-Augmented Question Answering in Qur'anic Tafsir](https://aclanthology.org/2025.emnlp-main.784.pdf) (as "Domain scholar evaluation")**
> Expert evaluation by an Islamic scholarship domain expert using a 5-point scale to assess the accuracy and correctness of model responses, with qualitative feedback on answer quality.

**[ReasonMed: A 370K Multi-Agent Generated Dataset for Advancing Medical Reasoning](https://aclanthology.org/2025.emnlp-main.1344.pdf) (as "Pilot expert validation")**
> A human evaluation protocol where board-certified physicians review a sample of model-generated examples to assess their medical quality.

**[Agent-as-a-Judge: Evaluate Agents with Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhuge25a/zhuge25a.pdf) (as "Human-as-a-Judge")**
> A human expert evaluation protocol in which expert evaluators review agent outputs and decide whether each requirement was satisfied, including consensus adjudication.

**[IFIR: A Comprehensive Benchmark for Evaluating Instruction-Following in Expert-Domain Information Retrieval](https://aclanthology.org/2025.naacl-long.511.pdf) (as "Human expert validation")**
> A procedure in which domain experts assess the quality of instruction-following queries and relevant passages in IFIR, rating criteria such as naturalness, fluency, and relevance on a 5-point scale.

**[Matter-of-Fact: A Benchmark for Verifying the Feasibility of Literature-Supported Claims in Materials Science](https://aclanthology.org/2025.emnlp-main.203.pdf) (as "Domain expert evaluation")**
> Human evaluation by a materials science expert to validate the correctness and feasibility of claims, serving as a gold standard for benchmark quality assessment.

## Relationships

### Expert evaluation →
- **LLM-as-a-judge** (measurements) — *correlates*
  > employ a combination of expert human evaluation and LLM-as-a-Judge (using GPT-4-turbo-2024-04-09)... has a higher correlation (≈0.97%) to expert human evaluations
  - [Visual Description Grounding Reduces Hallucinations and Boosts Reasoning in LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a6805b5564bd8d813a81c4b5a97e5ca6-Paper-Conference.pdf)

### → Expert evaluation
- **Faithfulness** (constructs) — *measured_by*
  > Automatic evaluation of retrieval augmented generation (RAG) systems relies on fine-grained dimensions like faithfulness and relevance, as judged by expert human annotators.
  - [MEMERAG: A Multilingual End-to-End Meta-Evaluation Benchmark for Retrieval Augmented Generation](https://aclanthology.org/2025.acl-long.1101.pdf)
- **Relevance** (constructs) — *measured_by*
  > Automatic evaluation of retrieval augmented generation (RAG) systems relies on fine-grained dimensions like faithfulness and relevance, as judged by expert human annotators.
  - [MEMERAG: A Multilingual End-to-End Meta-Evaluation Benchmark for Retrieval Augmented Generation](https://aclanthology.org/2025.acl-long.1101.pdf)
- **Accuracy** (constructs) — *measured_by*
  > An optimization expert manually reviewed each model and assessed the correctness of four key components: decision variables, objective function, equality constraints, and inequality constraints.
  - [Autoformulation of Mathematical Optimization Models Using LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/astorga25a/astorga25a.pdf)
- **Fluency** (constructs) — *measured_by*
  > Following the revision, each QA instance is evaluated by three different legal experts using five criteria: Fluency, Practicality, Relevance, Legal Accuracy, and Complexity. (Section 3.3)
  - [KoBLEX: Open Legal Question Answering with Multi-hop Reasoning](https://aclanthology.org/2025.emnlp-main.200.pdf)
- **Legal accuracy** (constructs) — *measured_by*
  > Following the revision, each QA instance is evaluated by three different legal experts using five criteria: Fluency, Practicality, Relevance, Legal Accuracy, and Complexity. (Section 3.3)
  - [KoBLEX: Open Legal Question Answering with Multi-hop Reasoning](https://aclanthology.org/2025.emnlp-main.200.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > Due to incomplete text annotations on the MMHal, GPT-4 couldn't reliably detect hallucinations. To make the results more reliable, we invited experts to manually annotate the data
  - [CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf)
- **EHRNoteQA** (measurements) — *correlates*
  > Results show that LLM performance on EHRNoteQA have higher correlation with clinician-evaluated performance (Spearman(ρ): 0.78, Kendall(τ ): 0.62)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **GAVIE** (measurements)
  > From our experiments, we show that GAVIE is not only stable but also aligns with human evaluation. (Section 1)
  - [Mitigating Hallucination in Large Multi-Modal Models via Robust Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/fed9263d7f1086e735904ff690527a53-Paper-Conference.pdf)
