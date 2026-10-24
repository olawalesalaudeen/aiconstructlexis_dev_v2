# Coding
**Type:** Behavior  
**Referenced in:** 13 papers  
**Also known as:** Coding assistance  

## State of the Field

**Space of definitions.** Across definitions, coding is most commonly described as responding to prompts that require code-related solutions or programming assistance. Papers largely agree on the core activities, writing, debugging, and completing code, though some phrase it as helping users and one definition states it as writing, debugging, or completing functional computer code, such as implementing a server. A broader related description also includes synthesizing, documenting, and reviewing code across various programming languages.

**Variants.** Papers use the nearby label coding assistance, and a smaller line of description broadens the task beyond writing and completion to synthesizing, documenting, and reviewing code. The settings mentioned include implementing a functional HTTP server, Python programming problems designed for entry-level programmers, and long-context applications that include coding. Related links also connect coding to code generation and code debugging, while one paper relates it to instruction following in structured tasks.

**Space of elicitation and scores.** Papers measure coding with 7 linked instruments. The most frequently linked names are CodeContests, EvalPlus, HumanEval+, LongBench-E, and MBPP, with other linked instruments also appearing. The linked instruments are described as benchmarks or datasets that cover coding either within broader skill suites or as programming tasks, with MBPP specified as Python programming problems for entry-level programmers and LongBench-E described as covering long-context applications such as coding.

**What it is taken as evidence of.** No construct is linked to coding, so papers do not explicitly use it as evidence of any construct here.

## Sources

**[Instruct-SkillMix: A Powerful Pipeline for LLM Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/473a9a75edc46eff5ff224d53d5f7294-Paper-Conference.pdf)**
> Responding to prompts that require code-related solutions or programming assistance.

**[Position: AI Scaling: From Up to Down and Out](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25fh/wang25fh.pdf) (as "Coding assistance")**
> The task of helping users write, debug, or complete computer code.

## Relationships

### Coding →
- **HumanEval+** (measurements) — *measured_by*
  > We evaluate models on 11 different benchmarks, covering skills such as ... coding (HumanEval+ [6, 32], MBPP+ [2, 32]) (Section 2.2).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **EvalPlus** (measurements) — *measured_by*
  > We evaluate models on 11 different benchmarks, covering skills such as ... coding (HumanEval+ [6, 32], MBPP+ [2, 32]) (Section 2.2).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **MBXP** (measurements) — *measured_by*
  > "open-web-math (Paster et al., 2023) and MBXP (Athiwaratkun et al., 2023). They address different capabilities of LLMs: reasoning and coding, respectively"
  - [PhyloLM: Inferring the Phylogeny of Large Language Models and Predicting their Performances in Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2e28663712d5a3429a98918c3058f7b-Paper-Conference.pdf)
- **LongBench-E** (measurements) — *measured_by*
  > we further test LongMamba on the LongBench-E dataset (Bai et al., 2023), which covers 13 long-context applications, such as coding and few-shot learning. (Section 6.2)
  - [LongMamba: Enhancing Mamba's Long-Context Capabilities via Training-Free Receptive Field Enlargement](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5d50d269e52f8eed497062311ff173-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > The benchmark [MTBench] covers diverse tasks such as reasoning, coding, mathematics, and other skill-based domains.
  - [Unveiling the Secret Recipe: A Guide For Supervised Fine-Tuning Small LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b6e2c96bc4702f761d7d108d6e31930f-Paper-Conference.pdf)
- **MBPP** (measurements) — *measured_by*
  > In the coding category, we assess using MBPP (Austin et al., 2021), a benchmark consisting of Python programming problems designed to be solvable by entry-level programmers. (Section 4.1).
  - [ParaICL: Towards Parallel In-Context Learning](https://aclanthology.org/2025.naacl-long.621.pdf)
- **CodeContests** (measurements) — *measured_by*
  > For our analysis, we look at seven datasets spanning instruction-following, reasoning, mathematics, and coding: MT-Bench (Zheng et al., 2023), AlpacaEval 2.0 (Li et al., 2023), Arena Hard Auto (Li et al., 2024b), MixEval (Ni et al., 2024), MixEval-Hard, MATH (Hendrycks et al., 2021), and CodeContests (Li et al., 2022). (Section 3.2)
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
- **Chatbot Arena** (measurements) — *measured_by*
  > "The most popular one is the Chatbot Arena ... which contains over one million user queries and evaluates models in various tasks such as code, math, and multilingual understanding"
  - [Polyrating: A Cost-Effective and Bias-Aware Rating System for LLM Evaluation](https://proceedings.iclr.cc/paper_files/paper/2025/file/d06537b4b38ccf008a54559d2c56fa23-Paper-Conference.pdf)

### Associated with
- **Code generation** (behaviors tasks)
  > Coding: The ability to write, synthesize, document, debug, and review code across various programming languages. (Section 2.1)
  - [Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf)
- **Code debugging** (behaviors tasks)
  > Coding: The ability to write, synthesize, document, debug, and review code across various programming languages. (Section 2.1)
  - [Law of the Weakest Link: Cross Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63ea6a7d01a34a2c7334dcf1a2c3b03d-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks)
  > Gemma-7B-Instruct performs better in structured tasks like reasoning and coding, where precise instruction-following is crucial (Section 3.1)
  - [Assessing Safety Risks and Quantization-aware Safety Patching for Quantized Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ci/chen25ci.pdf)
