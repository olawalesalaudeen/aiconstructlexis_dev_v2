# Evaluation ability
**Type:** Construct  
**Referenced in:** 14 papers  
**Also known as:** Evaluation capability, Fine-grained evaluation capability, Judging ability, Text evaluation ability, Judgment capability, Judge ability, LLM-as-a-judge ability  

## State of the Field

**Definition agreement:** Consensus. Most papers define evaluation ability as a model's latent capacity to judge the quality or correctness of generated outputs, trajectories, or solutions, often in a way that matches human judgments, preferences, or explicit criteria. A few papers narrow this to particular settings such as instruction adherence, coding, multimodal outputs, or multi-dimensional scoring, but these are applications of the same core judging ability rather than different constructs.

**Space of definitions.** Across the surveyed work, the prevailing usage treats evaluation ability as a latent model capacity to accurately assess the quality or correctness of model-generated outputs, responses, or intermediate steps. Most definitions keep this core framing while shifting the evaluation target, including instruction-following responses, coding solutions, text along multiple specified dimensions, and multimodal visual outputs. A smaller line of work narrows the construct to fine-grained evaluation, where judgments are made with user-defined score rubrics and reference materials rather than only coarse preferences, or to checking whether a response satisfies instruction constraints.

**Space of facets.** Papers use several near-synonymous labels for closely related capacities, including evaluation capability, judging ability, judgment capability, text evaluation ability, judge ability, and LLM-as-a-judge ability. The clearest subtype is fine-grained evaluation capability, defined around detailed rubrics and reference answers, and one paper groups reranking, beam search, and refinement under a shared fundamental judging capability. A smaller framing treats judge ability as a general ability of LLMs, while other papers apply these labels to text quality, instruction adherence, coding-task judging, or intermediate-step evaluation.

**Space of measurement.** The construct is linked to 6 measurement instruments and no behavioral indicators. Operationalizations are mostly benchmark or dataset based: CommonGen is used to compare generation and evaluation abilities, LLMBar is described as measuring assessment ability in instruction-following, RewardBench is used to evaluate judgment capability, and MT-Bench, Feedback Bench, and one other linked benchmark are used with customized score rubrics to measure correlation with GPT-4. Other papers operationalize it as agreement with human judgments or human voting, and one coding study uses a curated human-annotated dataset. These operationalizations target accurate judging of outputs, though they are often instantiated in task-specific settings such as instruction following, coding, or rubric-based text scoring.

**Links.** Beyond measurement, one paper reports that evaluation ability is related to generative ability, stating that it is simpler for language models to evaluate a sentence than to generate it, even for small language models. One paper also claims a causal relationship from evaluation ability to general ability, reporting that a training method built around judge tasks enhances the model's general capabilities.

## Sources

**[Non-myopic Generation of Language Models for Reasoning and Planning](https://proceedings.iclr.cc/paper_files/paper/2025/file/56b694fb10c02b177e75a41f45825a74-Paper-Conference.pdf) (as "Evaluation capability")**
> The model's latent ability to accurately assess the quality or correctness of a generated trajectory or its intermediate steps.

**[Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf) (as "Fine-grained evaluation capability")**
> The ability to judge text quality using detailed, user-defined criteria rather than only coarse or generic preferences.

**[Evaluating Judges as Evaluators: The JETTS Benchmark of LLM-as-Judges as Test-Time Scaling Evaluators](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhou25af/zhou25af.pdf) (as "Judging ability")**
> The latent capacity of an LLM to accurately assess the quality of model-generated responses, particularly in guiding test-time computation through reranking, beam search, or refinement.

**[CausalStock: Deep End-to-end Causal Discovery for News-driven Multi-stock Movement Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/54d689d58fe54c92aee2d732fc49fca8-Paper-Conference.pdf) (as "Text evaluation ability")**
> The latent capability of an LLM to accurately assess and score text along multiple specified dimensions.

**[SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf) (as "Judgment capability")**
> The latent ability of a model to assess whether a given response accurately adheres to the constraints of an instruction.

**[Improve LLM-as-a-Judge Ability as a General Ability](https://aclanthology.org/2025.emnlp-main.712.pdf) (as "Judge ability")**
> The latent capability of a large language model to evaluate responses, provide accurate preference signals, and render critical judgments.

## Relationships

### Evaluation ability →
- **LLMBar** (measurements) — *measured_by*
  > For assessing the refiner’s judgment capability, we turn to LLMBar (Zeng et al., 2023), a dataset designed to measure the assessment ability of LLMs in the context of instruction-following tasks. (Section 3.2)
  - [SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf)
- **CommonGen** (measurements) — *measured_by*
  > We conduct experiments to compare the text generation and evaluation abilities of LLMs using the CommonGen (Lin et al., 2020) task... (Section 4.1)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > Furthermore, measuring correlation with GPT-4 with 1222 customized score rubrics across four benchmarks (MT Bench, Vicuna Bench, Feedback Bench, Flask Eval) shows similar trends, bolstering PROMETHEUS’s capability as an evaluator LLM. (Abstract)
  - [Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf)
- **Vicuna-Bench** (measurements) — *measured_by*
  > Furthermore, measuring correlation with GPT-4 with 1222 customized score rubrics across four benchmarks (MT Bench, Vicuna Bench, Feedback Bench, Flask Eval) shows similar trends, bolstering PROMETHEUS’s capability as an evaluator LLM. (Abstract)
  - [Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf)
- **Feedback Bench** (measurements) — *measured_by*
  > Furthermore, measuring correlation with GPT-4 with 1222 customized score rubrics across four benchmarks (MT Bench, Vicuna Bench, Feedback Bench, Flask Eval) shows similar trends, bolstering PROMETHEUS’s capability as an evaluator LLM. (Abstract)
  - [Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf)
- **General ability** (constructs) — *causes*
  > Furthermore, our training method enhances the general capabilities of the model by constructing complicated judge task... (Abstract)
  - [Improve LLM-as-a-Judge Ability as a General Ability](https://aclanthology.org/2025.emnlp-main.712.pdf)
- **RewardBench** (measurements) — *measured_by*
  > To evaluate the judgment capabilities of our model, we conduct experiments on RewardBench (Lambert et al., 2024). (Section 1)
  - [Improve LLM-as-a-Judge Ability as a General Ability](https://aclanthology.org/2025.emnlp-main.712.pdf)
- **JudgeBench** (measurements) — *measured_by*
  > JudgeBench is a recent benchmark that evaluates LLM-based judges on challenging response pairs spanning knowledge, reasoning, math, and coding. (Section 3)
  - [Learning to Plan & Reason for Evaluation with Thinking-LLM-as-a-Judge](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saha25b/saha25b.pdf)

### Associated with
- **Generative ability** (constructs)
  > We disclose that it is simpler for language models to evaluate a sentence than to generate it, even for small language models. (Section 1)
  - [Language Model Self-improvement by Reinforcement Learning Contemplation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d5a655b8b373737b4f2aea8f78e5e754-Paper-Conference.pdf)
