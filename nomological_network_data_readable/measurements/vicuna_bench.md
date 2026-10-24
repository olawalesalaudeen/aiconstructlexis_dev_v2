# Vicuna-Bench
**Type:** Measurement  
**Referenced in:** 21 papers  
**Also known as:** Vicuna Bench, Vicuna-bench, Vicuna bench, GPT-4 evaluating benchmark, Vicuna, Vicuna Eval, Vicuna Evaluation, VicunaEval  

## State of the Field

**What it is.** Papers most commonly describe it as a benchmark or evaluation dataset for open-ended, chatbot-style instruction following, often built from user-shared conversations or a fixed set of prompts or questions and often judged by GPT-4. Several descriptions use an 80-question or 80-prompt setup, and one paper specifies an adapted single-rating version with 80 single-turn chat prompts and 320 responses from four models. The framing varies across papers: some emphasize open-ended dialogue or text generation, others short-text conversational evaluation or a general task benchmark, and some describe a GPT-4 judging protocol that compares paired responses, in one case against gpt-3.5-turbo as the reference model.

**What it is claimed to measure.** Papers use it most often for instruction-following evaluations. It is linked to five constructs and five behavioral indicators overall, so the reported measurement claims extend beyond one target. Smaller lines of work report it as measuring text generation, multi-turn dialogue, mathematical problem solving, and pairwise comparison, and papers also attach construct-level claims beyond instruction following.

**Space of uses.** In use, papers commonly pair it with MT-Bench, and some also place it alongside AlpacaEval, Feedback Bench, Flask Eval, and WizardLM. The prevailing positioning is as one of a small set of popular or widely used benchmarks for GPT-4-based automatic evaluation or LLM judging, sometimes for short-text tasks and sometimes for open-ended generation or chatbot capability checks. Some papers also describe it as a widely adopted scheme for comparing two model responses.

## Sources

**[Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf) (as "Vicuna Bench")**
> A benchmark for assessing LLM responses to user prompts, used to evaluate the correlation between evaluator models and human or GPT-4 scores.

**[SALMON: Self-Alignment with Instructable Reward Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/dda5cac5272a9bcd4bc73d90bc725ef1-Paper-Conference.pdf)**
> Chatbot benchmark using user-shared conversations evaluated by GPT-4 to assess model performance in open-ended dialogue.

**[OpenChat: Advancing Open-source Language Models with Mixed-Quality Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf) (as "Vicuna-bench")**
> A benchmark used to evaluate a model's instruction-following and conversational abilities, where model outputs are compared against a reference model (gpt-3.5-turbo) using GPT-4 as the judge.

**[SeRA: Self-Reviewing and Alignment of LLMs using Implicit Reward Margins](https://proceedings.iclr.cc/paper_files/paper/2025/file/fdcf2565ea86530d65b3622c06d90841-Paper-Conference.pdf) (as "Vicuna bench")**
> A benchmark used to evaluate the performance of LLMs on a variety of tasks.

**[RobustKV: Defending Large Language Models against Jailbreak Attacks via KV Eviction](https://proceedings.iclr.cc/paper_files/paper/2025/file/38bbae17d60940f3ee14dfd1035d7542-Paper-Conference.pdf) (as "VicunaEval")**
> A benchmark dataset used to evaluate an LLM's performance and response quality on short-text, conversational tasks.

**[LLaMA-Adapter: Efficient Fine-tuning of Large Language Models with Zero-initialized Attention](https://proceedings.iclr.cc/paper_files/paper/2024/file/c196239c5f9481e0db2755f31fe4585f-Paper-Conference.pdf) (as "GPT-4 evaluating benchmark")**
> An evaluation protocol that uses the GPT-4 model to assess and compare the quality of responses from different instruction-following models across a set of 80 questions.

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf) (as "Vicuna")**
> Benchmark based on user-shared conversations to evaluate open-ended text generation quality and helpfulness of model responses.

**[Self-Instructed Derived Prompt Generation Meets In-Context Learning: Unlocking New Potential of Black-Box LLMs](https://aclanthology.org/2025.acl-long.92.pdf) (as "Vicuna Eval")**
> An instruction-following evaluation dataset used to assess the quality of model responses across diverse prompts.

**[Beyond Logits: Aligning Feature Dynamics for Effective Knowledge Distillation](https://aclanthology.org/2025.acl-long.1125.pdf) (as "Vicuna Evaluation")**
> Benchmark comprising 80 challenging questions designed to evaluate the Vicuna model's performance on complex instruction-following tasks.

## Relationships

### → Vicuna-Bench
- **Instruction following ability** (constructs) — *measured_by*
  > To rigorously evaluate the instruction-following capabilities of AI models, we utilized three widely used benchmarks: MT-bench, Vicuna-bench, and the WizardLM testset (Section 4.1).
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *measured_by*
  > To evaluate the instruction-following ability, we employ the three most widely recognized benchmarks, including AlpacaEval (Li et al., 2023), MT-bench (Zheng et al., 2023) and Vicuna-bench (Chiang et al., 2023).
  - [OpenChat: Advancing Open-source Language Models with Mixed-Quality Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > “we employ a broad array of out-of-distribution benchmarks to conduct a more comprehensive evaluation of the model’s capabilities. This includes assessing ... open-ended generation (Vicuna (Chiang et al., 2023) and WizardLM (Xu et al., 2023))”
  - [Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf)
- **Evaluation ability** (constructs) — *measured_by*
  > Furthermore, measuring correlation with GPT-4 with 1222 customized score rubrics across four benchmarks (MT Bench, Vicuna Bench, Feedback Bench, Flask Eval) shows similar trends, bolstering PROMETHEUS’s capability as an evaluator LLM. (Abstract)
  - [Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > MT-bench and Vicuna-bench are designed to test the models' competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Multi-turn dialogue** (behaviors tasks) — *measured_by*
  > MT-bench and Vicuna-bench are designed to test the models' competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing through both multi-turn and single-turn dialogues.
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > MT-bench and Vicuna-bench are designed to test the models' competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Coding ability** (constructs) — *measured_by*
  > Figure 4 illustrates the Llama-2-7B-star_instruct's performance enhancements across nine metrics, with notable substantial improvements in math, coding and fermi problem-solving... Figure 4: Radar plot of detailed scores for Llama-2-7B-star_instrcut against the major baseline on different subtasks of (a) Vicuna-Bench and (b) MT-Bench.
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > To evaluate the LLM’s general performance in short-text tasks, we measure its WinRate against the text-davinci-003 model using 100 queries from AlpacaEval and 80 queries from VicunaEval. (Section 5.1)
  - [RobustKV: Defending Large Language Models against Jailbreak Attacks via KV Eviction](https://proceedings.iclr.cc/paper_files/paper/2025/file/38bbae17d60940f3ee14dfd1035d7542-Paper-Conference.pdf)
