# TRACE
**Type:** Measurement  
**Referenced in:** 6 papers  

## State of the Field

**What it is.** Across papers, TRACE is most commonly described as a public benchmark for continual learning or continual instruction tuning, organized as a learning sequence of tasks such as multi-choice QA, code generation, mathematical reasoning, and summarization. Some authors frame it more specifically as evaluating model performance across multiple sequential fine-tuning tasks or multi-round fine-tuning. A smaller line of work describes it as comprising 8 diverse tasks, including domain-specific QA, code completion, and mathematical reasoning, and another description presents it as a benchmark for improving and evaluating complex instruction following ability with 120K training data and 1K evaluation data.

**What it is claimed to measure.** Papers link TRACE to 3 constructs and 2 behavioral indicators. The linked constructs are Complex instruction following ability, Mathematical reasoning, and Safety, and the linked behavioral indicators are Code completion and Instruction following. Overall, papers use it to measure several different targets rather than centering on one construct, and one definition also says it is designed to evaluate general ability alongside instruction following and safety.

**Space of uses.** The prevailing usage is as a benchmark for continual learning or continual instruction tuning. Papers describe extending experiments on TRACE for continual learning, glossed in one case as multi-round fine-tuning, and using it to test the effectiveness of methods on sequential task learning. No other measurement instrument is linked to it.

## Sources

**[Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)**
> A public benchmark for continual learning that includes a sequence of tasks such as multi-choice QA, code generation, mathematical reasoning, and summarization.

## Relationships

### → TRACE
- **Code completion** (behaviors tasks) — *measured_by*
  > TRACE (Wang et al., 2023b) serves as a challenging continual instruction tuning benchmark comprising 8 diverse tasks, including domain-specific QA, code completion, mathematical reasoning (Section 2).
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > TRACE (Wang et al., 2023b) serves as a challenging continual instruction tuning benchmark comprising 8 diverse tasks, including domain-specific QA, code completion, mathematical reasoning (Section 2).
  - [Spurious Forgetting in Continual Learning of Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a774503daed55eb53c634847ae071ec7-Paper-Conference.pdf)
- **Complex instruction following ability** (constructs) — *measured_by*
  > this paper introduces TRACE, a benchmark for improving and evaluating the complex instruction-following ability, which consists of 120K training data and 1K evaluation data. (Abstract)
  - [IOPO: Empowering LLMs with Complex Instruction Following via Input-Output Preference Optimization](https://aclanthology.org/2025.acl-long.1079.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > TRACE, another continual instruction tuning benchmark, is designed to evaluate the general ability, instruction following, and safety for LLMs (Wang et al., 2023). (Section 2. Related Work)
  - [Large Continual Instruction Assistant](https://raw.githubusercontent.com/mlresearch/v267/main/assets/qiao25e/qiao25e.pdf)
- **Safety** (constructs) — *measured_by*
  > TRACE, another continual instruction tuning benchmark, is designed to evaluate the general ability, instruction following, and safety for LLMs (Wang et al., 2023). (Section 2. Related Work)
  - [Large Continual Instruction Assistant](https://raw.githubusercontent.com/mlresearch/v267/main/assets/qiao25e/qiao25e.pdf)
