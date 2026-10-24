# C-Eval
**Type:** Measurement  
**Referenced in:** 27 papers  
**Also known as:** CEval  

## State of the Field

**What it is.** Across papers, C-Eval is most commonly described as a comprehensive Chinese evaluation benchmark, or a multi-level, multi-discipline suite for foundation models. Definitions often say it covers 52 subjects or academic disciplines, including STEM, humanities, and social sciences; one paper further describes four difficulty levels, and another says it contains 13,948 multiple-choice questions. A smaller line of work frames it more by task, as a benchmark for cross-linguistic multi-task language understanding, Chinese instruction-following, or general knowledge and problem solving, and some studies use only subsets such as the logic subject or selected subjects.

**What it is claimed to measure.** Use claims are centered on general ability, but not limited to it. Papers link C-Eval to 3 constructs and 2 behavioral indicators: it is most often used to measure General ability, while smaller lines of work use it to measure Generalization and Multilingual understanding, and single-paper uses report it as evaluating Chinese instructions or as a source of subjects for Multiple-choice question answering. Overall, the recorded claims converge most on a broad general-capability framing and then spread across several related abilities.

**Space of uses.** Papers often deploy C-Eval as one component of a broader benchmark battery. No measurement instrument is linked to it, but studies report it alongside MMLU, GSM8k, HumanEval, CMMLU, and ARC in "complete capability evaluation" or broader general-domain benchmark suites, and some papers narrow it to the logic subject or other selected subjects for targeted evaluation.

## Sources

**[Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)**
> C-Eval, a benchmark used here to assess multi-task language understanding in a cross-linguistic setting.

**[YuLan-Mini: Pushing the Limits of Open Data-efficient Language Model](https://aclanthology.org/2025.acl-long.268.pdf) (as "CEval")**
> Comprehensive evaluation suite covering 52 Chinese academic subjects requiring factual and reasoning abilities.

## Relationships

### → C-Eval
- **General ability** (constructs) — *measured_by*
  > For the general domain evaluation benchmarks, we select MATH, MBPP, MMLU, and CEVAL from the aforementioned experimental settings. (Section 3.3).
  - [Mix-CPT: A Domain Adaptation Framework via Decoupling Knowledge Learning and Format Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc721384c26c0bdff3ec31a7de31d8d5-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For multi-choice QA, we choose eight subjects from CEVAL (Huang et al., 2023), covering compulsory courses from middle school to university in China. (Section 4.2)
  - [AQuilt: Weaving Logic and Self-Inspection into Low-Cost, High-Relevance Data Synthesis for Specialist LLMs](https://aclanthology.org/2025.emnlp-main.293.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > Instruction benchmarks evaluate a model’s ability to comprehend and execute detailed directives. ... with C-Eval (Huang et al., 2024) focusing on Chinese instructions.
  - [Benchmarking Large Language Models Under Data Contamination: A Survey from Static to Dynamic Evaluation](https://aclanthology.org/2025.emnlp-main.511.pdf)
- **Multilingual understanding** (constructs) — *measured_by*
  > a broad suite of general benchmarks—...CEval...—that cover ... multilingual understanding. (Section 4.1)
  - [Dynamic Expert Specialization: Towards Catastrophic Forgetting-Free Multi-Domain MoE Adaptation](https://aclanthology.org/2025.emnlp-main.932.pdf)
- **Cross-lingual generalization** (constructs) — *measured_by*
  > "SEC’s competitive performance on C-Eval shows its capability in the cross-linguistic scenario"
  - [Are Human-generated Demonstrations Necessary for In-context Learning?](https://proceedings.iclr.cc/paper_files/paper/2024/file/19914b5bf19ab2b245d2e6ff7299e8f0-Paper-Conference.pdf)
