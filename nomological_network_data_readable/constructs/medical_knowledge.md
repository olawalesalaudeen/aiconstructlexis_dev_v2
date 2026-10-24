# Medical knowledge
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Clinical domain knowledge, Clinical knowledge, Preliminary knowledge grasp  

## State of the Field

**Definition agreement:** Consensus. Most papers define medical knowledge as the extent or body of medicine-related facts, concepts, principles, and related information encoded or possessed by the model. A few definitions emphasize application or reasoning, or narrow the scope to foundational factual knowledge, but they still target the same core phenomenon of what medical knowledge the model has rather than a different construct.

**Space of definitions.** Across papers, the prevailing usage treats medical knowledge as a latent or embedded body of medicine-related information that a model possesses, including knowledge about diseases, symptoms, treatments, medications, procedures, and related principles or concepts. Several definitions describe this knowledge as encoded within the model and sometimes as something the model can apply, including in interpreting clinical texts. A smaller line of work narrows the construct to preliminary knowledge grasp, meaning memorizing and initially understanding foundational facts and definitions without complex reasoning or application. Papers also differ on whether reasoning belongs inside the construct: some definitions include procedures and reasoning in clinical domain knowledge, whereas other papers contrast medical knowledge with advanced reasoning or with practical capabilities in real-world clinical settings.

**Space of facets.** Papers often use nearby labels such as clinical knowledge and clinical domain knowledge for overlapping content, centered on diseases, symptoms, procedures, medications, and related concepts. One paper frames this space through clinical concepts, skills, and tasks, and points to clinical ontologies such as SNOMED, LOINC, RxNorm, and ICD as granular classifications of those categories. Other work partitions the construct by cognitive level: low-level or L1 evaluation is framed as preliminary knowledge grasp, and questions with "little to no reasoning" are treated as understanding rather than advanced reasoning.

**Space of measurement.** Across papers, medical knowledge is linked to 4 measurement instruments and 1 behavioral indicator. The most frequently linked instruments are MedMCQA and MedQA, followed by MMLU and PubMedQA; all are used as benchmark-style question answering evaluations, and the only linked behavioral indicator is multiple-choice question answering. The operationalization is explicit: low-level assessment uses MCQs as simple knowledge-recalling tasks in which the model recognizes the correct answer from candidate options, and several papers treat performance on medical QA benchmarks as evidence of clinical or medical knowledge. At the same time, some authors say these benchmarks mainly capture preliminary knowledge grasp and are not sufficient for evaluating practical capabilities in real-world clinical settings.

**Links.** Outside measurement, the recorded relationships consist only of a related link to multiple-choice question answering, used for simple knowledge recall where the model recognizes the correct answer from candidate options. No causal or correlational links are reported, and no other construct is linked to it.

## Sources

**[MedJourney: Benchmark and Evaluation of Large Language Models over Patient Clinical Journey](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f80af32390984cb709cdeb014d0df41-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The extent of a model's embedded knowledge about medical concepts, including diseases, symptoms, treatments, and medications.

**[EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Clinical domain knowledge")**
> The extent of an LLM's acquired knowledge about medical concepts, procedures, and reasoning, typically inferred from performance on tasks like answering questions from medical licensing exams.

**[Position: Medical Large Language Model Benchmarks Should Prioritize Construct Validity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/alaa25a/alaa25a.pdf) (as "Clinical knowledge")**
> The latent body of medically relevant knowledge about diseases, symptoms, procedures, medications, and related concepts used in practice.

**[Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf) (as "Preliminary knowledge grasp")**
> The latent ability to memorize and initially understand foundational medical knowledge, such as facts and definitions, without requiring complex reasoning or application.

## Relationships

### Medical knowledge →
- **MedQA** (measurements) — *measured_by*
  > While these benchmarks may be useful for assessing the clinical domain knowledge of LLMs, they are not sufficient for evaluating the practical capabilities of models in assisting healthcare professionals in real-world clinical settings [37]. (Section 2)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MedMCQA** (measurements) — *measured_by*
  > While these benchmarks may be useful for assessing the clinical domain knowledge of LLMs, they are not sufficient for evaluating the practical capabilities of models in assisting healthcare professionals in real-world clinical settings [37]. (Section 2)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)
- **PubMedQA** (measurements) — *measured_by*
  > While these benchmarks may be useful for assessing the clinical domain knowledge of LLMs, they are not sufficient for evaluating the practical capabilities of models in assisting healthcare professionals in real-world clinical settings [37]. (Section 2)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMLU-Medical** (measurements) — *measured_by*
  > While these benchmarks may be useful for assessing the clinical domain knowledge of LLMs, they are not sufficient for evaluating the practical capabilities of models in assisting healthcare professionals in real-world clinical settings [37]. (Section 2)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **Multiple-choice question answering** (behaviors tasks)
  > For Low-Level tasks (f1), we adopt multiple-choice questions (MCQs) as simple knowledge recalling tasks for Low-Level, where the model is required to recognize the correct answer from multiple candidate options (see the left part of Figure 2). (Section 3.3)
  - [Evaluating LLMs Across Multi-Cognitive Levels: From Medical Knowledge Mastery to Scenario-Based Problem Solving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25n/zhou25n.pdf)
