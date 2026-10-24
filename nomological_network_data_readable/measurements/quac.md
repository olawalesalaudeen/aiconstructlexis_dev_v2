# QuAC
**Type:** Measurement  
**Referenced in:** 3 papers  
**Also known as:** QUAC  

## State of the Field

**What it is.** Across the surveyed work, QuAC is most commonly described as the Question Answering in Context benchmark or dataset for conversational question answering. Definitions converge on a format with interconnected questions in a conversational, multi-turn dialogue, and one paper adds that it evaluates whether a model can understand context and participate in a dialogue about a text. In On Synthesizing Data for Context Attribution in Question Answering, it is further described as featuring coreferences across turns, challenging models to track context across multiple turns.

**What it is claimed to measure.** Recorded uses link QuAC to one construct, Reasoning, and to no behavioral indicators. The reported measurement claim is narrow rather than spread across many targets: one paper lists QUAC among the benchmarks used "for reasoning abilities," so papers use it to measure Reasoning rather than a wider set of constructs.

**Space of uses.** Papers use QuAC alongside other benchmarks rather than in isolation. One usage places it with ARC-Easy, ARC-Challenge, SIQA, PIQA, and WinoGrande in an all 0-shot evaluation for reasoning abilities, while another uses it with CoQA, OR-QuAC, and DoQA to assess generalization beyond the training distribution. In these descriptions, it is positioned as one benchmark within a broader set of evaluations.

## Sources

**[On the Inductive Bias of Stacking Towards Improving Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/837bc5db12f3d394d220815a7687340c-Paper-Conference.pdf)**
> The Question Answering in Context benchmark, which involves a series of interconnected questions in a conversational format.

**[BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf) (as "QUAC")**
> Question Answering in Context, a benchmark for evaluating a model's ability to understand context and participate in a dialogue about a text.

## Relationships

### → QuAC
- **Reasoning** (constructs) — *measured_by*
  > For reasoning abilities, we use ARC-Easy, ARC-Challenge [42], SIQA [43], PIQA [44], WinoGrande [45], and QUAC [46] (all 0-shot).
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
