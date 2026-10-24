# MedQA
**Type:** Measurement  
**Referenced in:** 49 papers  
**Also known as:** MedQA-USMLE, MedQA-US  

## State of the Field

**What it is.** Across the surveyed papers, MedQA is most commonly treated as a medical multiple-choice question answering benchmark built from United States Medical Licensing Examination questions, often described as professional medical board exam content used to evaluate model knowledge and reasoning in medicine. Some definitions add that it consists of USMLE-style questions curated by medical examination experts from various medical question banks (Rationale-Guided Retrieval Augmented Generation for Medical Question Answering), while a smaller line describes it as a standard single-turn benchmark with patient records followed by exam-style multiple-choice questions. Papers also use variant names such as MedQA-USMLE and MedQA-US: MedQA-USMLE is described as sourced from the National Board of Medical Examiners or from USMLE preparatory tests, and one paper notes that MedQA also included questions from Medbullets.

**What it is claimed to measure.** Papers use MedQA to measure 5 constructs and 6 behavioral indicators. The prevailing construct-level framing is medical knowledge, and papers also use it to measure medical reasoning, domain knowledge, reasoning, and zero-shot generalization; one paper explicitly says it was constructed from USMLE questions to evaluate medical reasoning and knowledge in a multiple-choice format. At the behavioral level, it is most often used for medical question answering, multiple-choice question answering, and question answering, and it is also used for chain of thought, grounded response generation, and knowledge graph question answering.

**Space of uses.** Papers typically use MedQA as a standard medical QA benchmark alongside other medical evaluation sets, most often MedMCQA, and also PubMedQA, MMLU-Med, and MedBullets. It is positioned as a closed-book or open-domain evaluation set, as a comparison point inside larger collections such as MIRAGE and the Open Medical LLM Leaderboard, and in a smaller number of cases as a source of few-shot USMLE examples or for clinical reader studies. Papers do not report any separate instrument-to-instrument link for MedQA.

**Concerns raised.** One paper says benchmarks such as MedQA may be useful for assessing clinical domain knowledge but are not sufficient for evaluating the practical capabilities of models in assisting healthcare professionals in real-world clinical settings.

## Sources

**[From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf)**
> A dataset containing US Medical Licensing Examination (USMLE) questions used to evaluate model knowledge and reasoning in the medical domain.

**[Pattern Recognition or Medical Knowledge? The Problem with Multiple-Choice Questions in Medicine](https://aclanthology.org/2025.acl-long.266.pdf) (as "MedQA-USMLE")**
> A medical multiple-choice question benchmark sourced from the National Board of Medical Examiners, containing clinical vignettes and knowledge-based questions used to evaluate LLM performance on human medical licensing exam content.

**[Query-driven Document-level Scientific Evidence Extraction from Biomedical Studies](https://aclanthology.org/2025.acl-long.1359.pdf) (as "MedQA-US")**
> A challenging question answering dataset containing multiple-choice questions from the United States Medical Licensing Examination (USMLE).

## Relationships

### → MedQA
- **Medical question answering** (behaviors tasks) — *measured_by*
  > After training on MedAlpaca for Medical (M) domain or MedAlpaca/Alpaca-GPT4 for Medical&General (M&G) domain, we test the models at round 60 on the evaluation datasets for Medical (M) domain, i.e., MedQA [10], and MedMCQA [22]. (Section 4.2)
  - [DoFIT: Domain-aware Federated Instruction Tuning with Alleviated Catastrophic Forgetting](https://proceedings.neurips.cc/paper_files/paper/2024/file/9be9407431b7ff8cc04cae5460fcb7ab-Paper-Conference.pdf)
- **Medical knowledge** (constructs) — *measured_by*
  > While these benchmarks may be useful for assessing the clinical domain knowledge of LLMs, they are not sufficient for evaluating the practical capabilities of models in assisting healthcare professionals in real-world clinical settings [37]. (Section 2)
  - [EHRNoteQA: An LLM Benchmark for Real-World Clinical Practice Using Discharge Summaries](https://proceedings.neurips.cc/paper_files/paper/2024/file/e15c4afff22f12c4986c1fcb4e941e03-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We also use MedQA, a collection of multiple-choice questions from the professional medical board exams (Jin et al., 2020).
  - [Teaching LLMs How to Learn with Contextual Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb0494e5ce9351cb120c3a35328dffef-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > ...while MedQA-USMLE [34] acts as a domain-specific QA benchmark. (Section 4.1)
  - [KnowGPT: Knowledge Graph based Prompting for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0b8705a611ed1ce19cdb759031078705-Paper-Conference.pdf)
- **Medical reasoning** (constructs) — *measured_by*
  > “MedQA was constructed from USMLE questions to evaluate the medical reasoning and knowledge of LLMs in a multiple-choice format.”
  - [Position: Medical Large Language Model Benchmarks Should Prioritize Construct Validity](https://raw.githubusercontent.com/mlresearch/v267/main/assets/alaa25a/alaa25a.pdf)
- **Reasoning** (constructs) — *measured_by*
  > both MMLU and MedQA are more oriented toward reasoning rather than pure factual recall, which poses bigger challenges for both the retriever and the LM. (Section 4.2)
  - [Scaling Retrieval-Based Language Models with a Trillion-Token Datastore](https://proceedings.neurips.cc/paper_files/paper/2024/file/a5d8aba27dfef4e849e8cb03fb87a954-Paper-Conference.pdf)
- **Grounded response generation** (behaviors tasks) — *measured_by*
  > Figure 6: % of test hypotheses fully groundable after adding various microtheories (n-sized Random, Usage, QC, & PC Mts) to a base Corpus. ... MedQA Grounding Rate (%) of Test Hypotheses
  - [From Models to Microtheories: Distilling a Model's Topical Knowledge for Grounded Question-Answering](https://proceedings.iclr.cc/paper_files/paper/2025/file/77d52754ff6b2de5a5d96ee921b6b3cd-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *measured_by*
  > To further evaluate the generalizability of GCR, we conduct zero-shot transfer experiments on three new KGQA datasets: FreebaseQA, CSQA and MedQA (Section 5.1).
  - [Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25t/luo25t.pdf)
- **Knowledge graph question answering** (behaviors tasks) — *measured_by*
  > We evaluate KGQA benchmarks spanning different backbone KGs. ... MedQA (Jin et al., 2021) consists of questions extracted from USMLE exams. (Section 4.1)
  - [BYOKG-RAG: Multi-Strategy Graph Retrieval for Knowledge Graph Question Answering](https://aclanthology.org/2025.emnlp-main.1417.pdf)
