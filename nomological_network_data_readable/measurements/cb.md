# CB
**Type:** Measurement  
**Referenced in:** 14 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage treats CB, often expanded as CommitmentBank, as a SuperGLUE natural language inference or textual entailment benchmark over short premises and hypotheses or other short texts. Several definitions add that it evaluates whether a sentence or statement commits the author to a belief or entailment, some specify entailment, contradiction, and neutrality between a premise and a hypothesis, and one paper frames it more broadly as a general NLU classification task.

**What it is claimed to measure.** Claims about what CB measures are concentrated rather than spread out: it is linked to one behavioral indicator, Natural language inference, and to no constructs. Papers use it to measure Natural language inference, and related descriptions also say it evaluates textual entailment, in one case with an emphasis on pragmatic inference.

**Space of uses.** Papers usually position CB as one task within larger evaluation suites rather than as a standalone protocol. It is linked to one other measurement instrument, SuperGLUE, and papers commonly describe it as part of that benchmark; across examples it appears alongside RTE and COPA, and also with BoolQ and WiC, with papers reporting accuracy or performance on CB and using it as an in-domain NLI evaluation task or fine-tuning task.

## Sources

**[Batch Calibration: Rethinking Calibration for In-Context Learning and Prompt Engineering](https://proceedings.iclr.cc/paper_files/paper/2024/file/003e438cf04e3caf0a5c908495e484fe-Paper-Conference.pdf)**
> A textual entailment benchmark used to evaluate natural language inference on short premise-hypothesis pairs.

## Relationships

### → CB
- **Natural language inference** (behaviors tasks) — *measured_by*
  > Natural language inference: CB (De Marneff et al., 2019) and WiC (Pilehvar & Camacho-Collados, 2018) from superGLUE (Wang et al., 2019) (Section 5.1).
  - [Two-stage LLM Fine-tuning with Less Specialization and More Generalization](https://proceedings.iclr.cc/paper_files/paper/2024/file/597254dc45be8c166d3ccf0ba2d56325-Paper-Conference.pdf)

### Associated with
- **SuperGLUE** (measurements)
  > “we use six NLU tasks from the SuperGLUE benchmark to evaluate the performance of the language model ... including ... CB”
  - [MEPT: Mixture of Expert Prompt Tuning as a Manifold Mapper](https://aclanthology.org/2025.emnlp-main.823.pdf)
