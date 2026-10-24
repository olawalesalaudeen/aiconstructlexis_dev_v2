# FaithEval
**Type:** Measurement  
**Referenced in:** 4 papers  

## State of the Field

**What it is.** Papers describe FaithEval as an evaluation benchmark designed to measure and reduce model hallucination across challenging scenarios. Another description presents it as a novel, comprehensive benchmark for evaluating the faithfulness of LLMs in contextual scenarios, and says it comprises 4.9K high-quality problems built through a four-stage context construction and validation framework.

**What it is claimed to measure.** Papers link FaithEval to one construct and two behavioral indicators. The main measurement claim is context faithfulness: one paper describes it as a benchmark tailored to evaluate the faithfulness of LLMs in contextual scenarios. It is also reported as measuring document question answering, and another paper uses FaithEval in an ablation study while discussing reduced hallucinations, treating the benchmark as a measure of hallucination.

**Space of uses.** Papers connect FaithEval with two other instruments, Human evaluation and LLM-as-a-judge. One description says its problems were validated with both LLM-based auto-evaluation and human validation, and another says a separate LLM judge was used to verify whether a new answer was valid given the context. Beyond its role as a benchmark, one study also uses it in an ablation setting when examining robustness to noisy contexts and hallucination-related behavior.

## Sources

**[Efficient OpAmp Adaptation for Zoom Attention to Golden Contexts](https://aclanthology.org/2025.acl-long.653.pdf)**
> An evaluation benchmark designed to measure and reduce model hallucination across different challenging scenarios.

## Relationships

### → FaithEval
- **Context faithfulness** (constructs) — *measured_by*
  > “we introduce FaithEval, a novel and comprehensive benchmark tailored to evaluate the faithfulness of LLMs in contextual scenarios”
  - [FaithEval: Can Your Language Model Stay Faithful to Context, Even If "The Moon is Made of Marshmallows"](https://proceedings.iclr.cc/paper_files/paper/2025/file/48404cd9ce03946c6b7177691f3267a1-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > As shown in Table 5, the ablation study on FaithEval (Ming et al., 2024) demonstrates that OpAmp not only enhances robustness to noisy contexts but also reduces hallucinations as a valuable secondary benefit.
  - [Efficient OpAmp Adaptation for Zoom Attention to Golden Contexts](https://aclanthology.org/2025.acl-long.653.pdf)

### Associated with
- **Human evaluation** (measurements)
  > FaithEval comprises 4.9K high-quality problems in total, validated through a rigorous four-stage context construction and validation framework, employing both LLM-based auto-evaluation and human validation.
  - [FaithEval: Can Your Language Model Stay Faithful to Context, Even If "The Moon is Made of Marshmallows"](https://proceedings.iclr.cc/paper_files/paper/2025/file/48404cd9ce03946c6b7177691f3267a1-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements)
  > “we validate the quality of the new context by using a separate LLM judge to verify whether the new answer is valid given the context”
  - [FaithEval: Can Your Language Model Stay Faithful to Context, Even If "The Moon is Made of Marshmallows"](https://proceedings.iclr.cc/paper_files/paper/2025/file/48404cd9ce03946c6b7177691f3267a1-Paper-Conference.pdf)
