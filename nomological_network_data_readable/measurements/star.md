# STAR
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage treats STAR as a video question-answering benchmark for situated reasoning in real-world videos. Definitions variously say it requires situational reasoning about social interactions and events, and one paper further describes it as containing questions about interaction, sequence, prediction, and feasibility. A smaller line of work uses it as a source for referred video question-answering, and another presents it in zero-shot and multi-choice video question answering evaluation.

**What it is claimed to measure.** Papers link STAR to five constructs and one behavioral indicator overall, so the measurement claims are spread across several targets rather than centered on a single construct. The behavioral indicator linked to it is Video question answering, and papers also report STAR as measuring Visual reasoning, Fine-grained visual understanding, Causal reasoning, and Temporal reasoning; for the last two, one paper says the dataset "demand[s] both causal and temporal reasoning abilities." One additional paper records STAR as related to Self-improvement rather than as a measure.

**Space of uses.** Papers most often present STAR inside broader evaluation suites. It is used alongside NExT-QA most often, and also appears beside IntentQA, Egoschema, ACRE, and CATER; one paper additionally places it within a set of 11 VideoQA benchmarks. No paper explicitly relates STAR to another measurement instrument.

## Sources

**[Divide and Conquer: Exploring Language-centric Tree Reasoning for Video Question-Answering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25d/liao25d.pdf)**
> A Video Question-Answering benchmark that requires situational reasoning about social interactions and events.

## Relationships

### → STAR
- **Video question answering** (behaviors tasks) — *measured_by*
  > We evaluate ReasVQA on three popular benchmarks, and our results establish new state-of-the-art performance with significant improvements of +2.9 on NExT-QA, +7.3 on STAR, and +5.9 on IntentQA.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Visual reasoning** (constructs) — *measured_by*
  > We demonstrate the effectiveness of our framework on diverse visual reasoning tasks from the ACRE, CATER, Something-Else and STAR datasets (Abstract).
  - [Look, Remember and Reason: Grounded Reasoning in Videos with Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/1df282080150537df7b00c20aadcafad-Paper-Conference.pdf)
- **Causal reasoning** (constructs) — *measured_by*
  > We conduct experiments on three popular VideoQA datasets: NExT-QA, STAR, and IntentQA (Xiao et al., 2021; Wu et al., 2021; Li et al., 2023a), which demand both causal and temporal reasoning abilities.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
- **Temporal reasoning** (constructs) — *measured_by*
  > We conduct experiments on three popular VideoQA datasets: NExT-QA, STAR, and IntentQA (Xiao et al., 2021; Wu et al., 2021; Li et al., 2023a), which demand both causal and temporal reasoning abilities.
  - [ReasVQA: Advancing VideoQA with Imperfect Reasoning Process](https://aclanthology.org/2025.naacl-long.82.pdf)
