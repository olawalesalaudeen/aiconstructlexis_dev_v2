# Instruction following
**Type:** Behavior  
**Referenced in:** 280 papers  
**Also known as:** Instruction adherence, Prompt execution, Following natural language instructions, Requirement satisfaction, Policy violation, Poor instruction-following, Instruction execution, Instruction violation, Instruction non-compliance, Phrase repetition, Natural language instruction following  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage centers on adherence to explicit prompt constraints: producing the requested action or response format, staying on task, and avoiding unsupported or extraneous actions. Many papers define success through concrete constraints such as length limits, valid JSON, structural rules, style or content requirements, or exact phrase reproduction, while a smaller line broadens it to executing high-level natural-language commands or satisfying task requirements and dependency-aware milestones. Failures are described symmetrically as instruction violation or non-compliance, for example using the wrong language or format, revealing forbidden information, inserting unspecified actions, or taking an unauthorized policy-violating action.

**Variants.** Papers use several near-synonyms for this behavior, most often instruction adherence, while smaller strands call it prompt execution, following natural language instructions, requirement satisfaction, or policy violation. The settings vary across multimodal and GUI tasks, negotiations with word-limit and JSON constraints, embodied planning from user goals, role-play that must stay in character, and multilingual or narrative tasks, with a few specialized cases such as exact phrase repetition.

**Space of elicitation and scores.** Papers link instruction following to 58 measurement instruments, with MT-Bench, IFEval, AlpacaEval 2.0, AlpacaEval, and Arena-Hard appearing most often. These are usually benchmark-style evaluations of open-ended or explicit-instruction tasks: MT-Bench is described as multi-turn or open-ended questions graded by GPT-4, IFEval as evaluating whether models follow explicit instructions, AlpacaEval 2.0 as a length-controlled, reference-free instruction-following benchmark, and Arena-Hard as judging response quality on open-ended instruction following. Other papers also use instruction datasets, domain-specific benchmarks, GPT-4 or other LLM judges, and human evaluation to elicit or score the behavior.

**What it is taken as evidence of.** Papers link instruction following to 22 constructs, most often Helpfulness, Human preference alignment, In-context learning, Evaluator self-consistency, and Reasoning. There is no single agreed construct it reflects: papers describe Helpfulness as related to or correlated with instruction following, and one paper states that a model is more helpful if it shows superior performance on measures of instruction following. Other papers claim causal relationships from instruction following to Human preference alignment, or from In-context learning and Evaluator self-consistency to instruction following, while Reasoning is presented as a related capability rather than a settled target construct.

## Sources

**[UI-Vision: A Desktop-centric GUI Benchmark for Visual Perception and Interaction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/nayak25a/nayak25a.pdf) (as "Instruction adherence")**
> The tendency to follow the requested action format and avoid inserting unsupported or extraneous actions.

**[Ask, and it shall be given: On the Turing completeness of prompting](https://proceedings.iclr.cc/paper_files/paper/2025/file/123d3e814e257e0781e5d328232ead9b-Paper-Conference.pdf) (as "Prompt execution")**
> The model processing and acting upon a specific input prompt to perform a designated task.

**[Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf) (as "Following natural language instructions")**
> The observable act of generating a response that adheres to the constraints and commands specified in a natural language prompt.

**[Agent-as-a-Judge: Evaluate Agents with Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhuge25a/zhuge25a.pdf) (as "Requirement satisfaction")**
> Demonstrating that a generated solution fulfills specified functional and structural conditions defined in a task, including dependency-aware milestones.

**[Effective Red-Teaming of Policy-Adherent Agents](https://aclanthology.org/2025.emnlp-main.114.pdf) (as "Policy violation")**
> The observable act of an agent performing an action that contradicts a stated domain-specific rule or constraint, such as canceling a non-refundable ticket.

**[FilBench: Can LLMs Understand and Generate Filipino?](https://aclanthology.org/2025.emnlp-main.127.pdf) (as "Poor instruction-following")**
> Failing to adhere to task instructions, such as generating output in the wrong language or format.

**[Benchmarking Large Language Models Under Data Contamination: A Survey from Static to Dynamic Evaluation](https://aclanthology.org/2025.emnlp-main.511.pdf) (as "Instruction execution")**
> Following detailed directives by carrying out the requested steps or constraints.

**[Sparse Activation Editing for Reliable Instruction Following in Narratives](https://aclanthology.org/2025.emnlp-main.1311.pdf) (as "Instruction violation")**
> The observable behavior where a model generates a response that contradicts or ignores the original instruction, such as revealing forbidden information in a narrative context.

**[TVQACML: Benchmarking Text-Centric Visual Question Answering in Multilingual Chinese Minority Languages](https://aclanthology.org/2025.emnlp-main.705.pdf) (as "Instruction non-compliance")**
> The observable failure of a model to adhere to the specified format or constraints of a given task or prompt.

**[Improbable Bigrams Expose Vulnerabilities of Incomplete Tokens in Byte-Level Tokenizers](https://aclanthology.org/2025.emnlp-main.919.pdf) (as "Phrase repetition")**
> The observable task of a model accurately reproducing a specific phrase provided in the input prompt when instructed to do so.

**[LoTa-Bench: Benchmarking Language-oriented Task Planners for Embodied Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91fb65c6324a984ea9ef39a5b84af04-Paper-Conference.pdf) (as "Natural language instruction following")**
> Interpreting and acting upon high-level user commands expressed in natural language to initiate appropriate task planning behavior.

## Relationships

### Instruction following →
- **MT-Bench** (measurements) — *measured_by*
  > MT-Bench is a benchmark featuring challenging ONE-TURN or MULTI-TURN reasoning and instruction-following examples, where the model responses are graded by GPT-4 on a scale of 1 (worst) to 10 (best). (Section 6)
  - [The Trickle-down Impact of Reward Inconsistency on RLHF](https://proceedings.iclr.cc/paper_files/paper/2024/file/8c976a95df6a229551cd28c76627edc9-Paper-Conference.pdf)
- **IFEval** (measurements) — *measured_by*
  > “Instruction-Following Evaluation (IFEval): IFEval is a benchmark evaluating a model’s ability to follow explicit instructions”
  - [Cal-DPO: Calibrated Direct Preference Optimization for Language Model Alignment](https://proceedings.neurips.cc/paper_files/paper/2024/file/cf8b2205e39f81726a8d828ecbe00ad0-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > We primarily assess our models using three of the most popular open-ended instruction-following benchmarks: MT-Bench [94], AlpacaEval 2 [51], and Arena-Hard v0.1 [50].
  - [SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/file/e099c1c9699814af0be873a175361713-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > We primarily assess our models using three of the most popular open-ended instruction-following benchmarks: MT-Bench [94], AlpacaEval 2 [51], and Arena-Hard v0.1 [50].
  - [SimPO: Simple Preference Optimization with a Reference-Free Reward](https://proceedings.neurips.cc/paper_files/paper/2024/file/e099c1c9699814af0be873a175361713-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > To evaluate the instruction-following ability, we employ the three most widely recognized benchmarks, including AlpacaEval (Li et al., 2023), MT-bench (Zheng et al., 2023) and Vicuna-bench (Chiang et al., 2023).
  - [OpenChat: Advancing Open-source Language Models with Mixed-Quality Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > "Alpaca contains 52K instruction-following data generated from text-davinci-003 (GPT 3.5)" (Section 4.1)
  - [QA-LoRA: Quantization-Aware Low-Rank Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e6c2e85db1f1039177c4495ccd399ac4-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > Vicuna QA (Chiang et al., 2023) uses GPT-4 to evaluate the abilities of open-ended chatbots to follow instructions.
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **Vicuna-Bench** (measurements) — *measured_by*
  > To evaluate the instruction-following ability, we employ the three most widely recognized benchmarks, including AlpacaEval (Li et al., 2023), MT-bench (Zheng et al., 2023) and Vicuna-bench (Chiang et al., 2023).
  - [OpenChat: Advancing Open-source Language Models with Mixed-Quality Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/fc8781fb328fb1fd069584a4519a2709-Paper-Conference.pdf)
- **UltraFeedback** (measurements) — *measured_by*
  > UltraFeedback [7]: a multi-aspect alignment dataset with 64K prompts with preferences obtained from GPT-4, including "Instruction following", "Honest", "Truthful", and "Helpful" objectives (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > math and code problems are formatted as instructions, enhancing instruction following capabilities enables LLMs to better address these tasks. (Section 4)
  - [Data Mixing Optimization for Supervised Fine-Tuning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bh/li25bh.pdf)
- **Super-NaturalInstructions** (measurements) — *measured_by*
  > This set of tasks evaluates a model’s capability in adhering to instructions. ... Our chosen benchmark for this category is the Super Natural Instructions (Super NI) (Wang et al., 2022)... (Section 4.1)
  - [Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf)
- **FollowIR** (measurements) — *measured_by*
  > State-of-the-art bi-encoder performance on instruction-following retrieval tasks (+14.3 p-MRR, +3.1 nDCG/MAP on FollowIR (Weller et al., 2024)) with comparable scores to SoTA cross-encoders. (Section 1)
  - [Promptriever: Instruction-Trained Retrievers Can Be Prompted Like Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2cefdb2c4c3274b78cd450bac35228df-Paper-Conference.pdf)
- **InfoBench** (measurements) — *measured_by*
  > InfoBench (Qin et al., 2024) introduces a new metric called Decomposed Requirements Following Ratio (DRFR) for assessing the instruction-adherence capabilities of LLMs.
  - [MIA-Bench: Towards Better Instruction Following Evaluation of Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/571082ea18d30060177dfcaf662ff0e5-Paper-Conference.pdf)
- **Human preference alignment** (constructs) — *causes*
  > the model's ability to follow instructions inherently leads to better alignment with general preferences such as helpfulness and safety
  - [On-the-fly Preference Alignment via Principle-Guided Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/bcd1d7a599f33c06f06615429793c69b-Paper-Conference.pdf)
- **BigCodeBench** (measurements) — *measured_by*
  > BigCodeBench (Zhuo et al., 2024) is a more challenging benchmark for code generation that evaluates models’ abilities to follow complex instructions... (Section 4.1)
  - [Selective Prompt Anchoring for Code Generation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tian25a/tian25a.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > we conducted a comprehensive user study ... raters were presented with a set of three audio clips—one from each system—and were asked to rank them according to two key dimensions: Fidelity Quality ... and Instruction Following, which measures how accurately the audio reflects the given prompt. (Section 5.4)
  - [Language Model Based Text-to-Audio Generation: Anti-Causally Aligned Collaborative Residual Transformers](https://aclanthology.org/2025.emnlp-main.1322.pdf)
- **LLMBar** (measurements) — *measured_by*
  > LLMBar (Zeng et al., 2023) instead takes a different approach by assessing LLM-based judges’ ability to follow instructions, using response pairs with clear ground truth preference labels based on adherence to instructions rather than subjective preferences. (Section 2)
  - [JudgeBench: A Benchmark for Evaluating LLM-Based Judges](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e720fce64f91114c49cfd640d821da3-Paper-Conference.pdf)
- **Zero-shot generalization** (constructs) — *causes*
  > multimodal instruction tuning has been introduced (Liu et al., 2024), full fine-tuning pre-trained models with diverse multimodal instruction-following datasets, thereby enabling zero-shot generalization to previously unseen multimodal tasks. (Section 1)
  - [Re-Imagining Multimodal Instruction Tuning: A Representation View](https://proceedings.iclr.cc/paper_files/paper/2025/file/dcf88cbc8d01ce7309b83d0ebaeb9d29-Paper-Conference.pdf)
- **FollowBench** (measurements) — *measured_by*
  > We evaluate the trained models on several widely-used instruction-following benchmarks, including IFEval (Zhou et al., 2023), Multi-IF (He et al., 2024b), SysBench (Qin et al., 2024), FollowBench (Jiang et al., 2024), and CFBench (Zhang et al., 2024a). (Introduction)
  - [VerIF: Verification Engineering for Reinforcement Learning in Instruction Following](https://aclanthology.org/2025.emnlp-main.1542.pdf)
- **AgentBench** (measurements) — *measured_by*
  > AGENTBENCH thus systematically evaluate an LLM’s core abilities, including following instructions (Ouyang et al., 2022), coding (Chen et al., 2021), knowledge acquisition (Joshi et al., 2017; Talmor et al., 2019), logical reasoning (Srivastava et al., 2023), and commonsense grounding (Shridhar et al., 2020a).
  - [AgentBench: Evaluating LLMs as Agents](https://proceedings.iclr.cc/paper_files/paper/2024/file/e9df36b21ff4ee211a8b71ee8b7e9f57-Paper-Conference.pdf)
- **Harmful content generation** (behaviors tasks) — *causes*
  > GPT-4 showed notably more unsafe behavior than Turbo in almost all cases when chatting with ciphers, due to its superior instruction understanding and adherence, thereby interpreting the cipher instruction and generating a relevant response. (Section 4.3)
  - [GPT-4 Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher](https://proceedings.iclr.cc/paper_files/paper/2024/file/ed4c38fe7899d3653acf39b2102af8ba-Paper-Conference.pdf)
- **PandaLM** (measurements) — *measured_by*
  > It addresses vital subjective factors such as relative conciseness, clarity, adherence to instructions, comprehensiveness, and formality.
  - [PandaLM: An Automatic Evaluation Benchmark for LLM Instruction Tuning Optimization](https://proceedings.iclr.cc/paper_files/paper/2024/file/be3b0d51a2b86cb4ffe50f13480217e0-Paper-Conference.pdf)
- **GAVIE** (measurements) — *measured_by*
  > To improve the robustness and flexibility of the evaluation on visual instruction tuning, we propose GPT4-Assisted Visual Instruction Evaluation (GAVIE) to assess the LMM output in two different aspects: Relevancy to evaluate the instruction-following performance and Accuracy to measure the visual hallucination in the LMM output. (Section 1)
  - [Mitigating Hallucination in Large Multi-Modal Models via Robust Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/fed9263d7f1086e735904ff690527a53-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > To examine general visual understanding and instruction following of our model, we follow common practices and employ MMBench [77], MME [78], SEEDBench [79], MMMU [30] and MathVista [80] for evaluation. (Section 4.2)
  - [Lumen: Unleashing Versatile Vision-Centric Capabilities of Large Multimodal Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/946ecab300b0695fe24b53a92e632935-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > Furthermore, we reveal that the catastrophic forgetting in MLLMs is primarily due to the decline in instruction following rather than reasoning knowledge.
  - [CoIN: A Benchmark of Continual Instruction Tuning for Multimodel Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a45500d9eda640deed90d8a62742be5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Self-improvement** (constructs) — *causes*
  > We believe this result indicates that self-improvement requires a minimal level of instruction following and reasoning capabilities, which is not present in these small models. (Section 4.1)
  - [Mind the Gap: Examining the Self-Improvement Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/63943ee9fe347f3d95892cf87d9a42e6-Paper-Conference.pdf)
- **MT-Bench-101** (measurements) — *measured_by*
  > Also, we employed three popular and challenging benchmarks to evaluate the open-ended instruction following task: AlpacaEval (Li et al., 2023), Arena-Hard (Li et al., 2024), MT-Bench 101 (Bai et al., 2024) (Section 5.1).
  - [Uncertainty and Influence aware Reward Model Refinement for Reinforcement Learning from Human Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/fd7259e22add6de6df8ff0ccc902a34d-Paper-Conference.pdf)
- **LiveBench** (measurements) — *measured_by*
  > LiveBench... contains a wide variety of challenging tasks, spanning math, coding, reasoning, language, instruction following, and data analysis.
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **UltraChat** (measurements) — *measured_by*
  > ...and instruction task UltraChat (Ding et al., 2023). (§5)
  - [Model Equality Testing: Which Model is this API Serving?](https://proceedings.iclr.cc/paper_files/paper/2025/file/d73234a13815fc1f9779dd17d89be9b4-Paper-Conference.pdf)
- **HelpSteer** (measurements) — *measured_by*
  > HelpSteer (Wang et al., 2023) is a QA dataset aimed at evaluating the model’s capability to follow instructions across five dimensions, including informativeness and factuality. (Section 4.1)
  - [Amulet: ReAlignment During Test Time for Personalized Preference Adaptation of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c43d4a79dede363a2d061c6158e5a5-Paper-Conference.pdf)
- **ArmoRM** (measurements) — *measured_by*
  > To address this issue, we selected the instruction-following dimension from ArmoRM-8B (Wang et al., 2024a) as the main evaluation metric for our experiment. (Section 4.1)
  - [Amulet: ReAlignment During Test Time for Personalized Preference Adaptation of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c43d4a79dede363a2d061c6158e5a5-Paper-Conference.pdf)
- **LongGenBench** (measurements) — *measured_by*
  > We introduced LongGenBench, a synthetic benchmark that evaluates long-form generation capabilities of language models by testing their ability to follow instructions over extended sequences. (Section 6)
  - [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf)
- **Long-form text generation** (behaviors tasks) — *causes*
  > The ability to follow instructions is essential for long text generation (Reversed NIAH1), just as effective information retrieval is fundamental for processing long-context inputs (NIAH(Kamradt, 2023)). (Section 1)
  - [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf)
- **Visual grounding** (constructs) — *causes*
  > “These results emphasize the superiority of Text4Seg in following instructions, leading to enhanced visual grounding ability.”
  - [Text4Seg: Reimagining Image Segmentation as Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/04d8c25cbf0d5e1b70d64e672ac92637-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > "we also confirm that our safety-tuned model still preserves general instruction-following capabilities: as shown in Table B.2, the performance on the six tasks in the Open LLM Leaderboard changes insignificantly with safety tuning."
  - [Learning Diverse Attacks on Large Language Models for Robust Red-Teaming and Safety Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/9e128701ceca0ba03658a305faf39deb-Paper-Conference.pdf)
- **AudioBench** (measurements) — *measured_by*
  > Despite recent advancements, there lacks a comprehensive benchmark for AudioLLMs on instruction following capabilities conditioned on audio signals. AudioBench addresses this gap by setting up datasets as well as desired evaluation metrics.
  - [AudioBench: A Universal Benchmark for Audio Large Language Models](https://aclanthology.org/2025.naacl-long.218.pdf)
- **WildBench** (measurements) — *measured_by*
  > "we evaluate the evaluation protocols used in three automatic LLM benchmarks for instruction-following4 – AlpacaEval (Li et al., 2023c), ArenaHard (Li et al., 2024b), and WildBench (Lin et al., 2024)"
  - [ReIFE: Re-evaluating Instruction-Following Evaluation](https://aclanthology.org/2025.naacl-long.610.pdf)
- **BabyAI** (measurements) — *measured_by*
  > BabyAI is a grid world platform for instruction following where an agent receives natural language goal instructions such as: “Go to the tile (3,2)” or “Look behind the green locked door”. (Section 5)
  - [The Synergy of LLMs & RL Unlocks Offline Learning of Generalizable Language-Conditioned Policies with Low-fidelity Data](https://raw.githubusercontent.com/mlresearch/v267/main/assets/pouplin25a/pouplin25a.pdf)
- **TRACE** (measurements) — *measured_by*
  > TRACE, another continual instruction tuning benchmark, is designed to evaluate the general ability, instruction following, and safety for LLMs (Wang et al., 2023). (Section 2. Related Work)
  - [Large Continual Instruction Assistant](https://raw.githubusercontent.com/mlresearch/v267/main/assets/qiao25e/qiao25e.pdf)
- **Natural Instructions** (measurements) — *measured_by*
  > Our experiments use three datasets for training and evaluation: the XSum summarization dataset (Narayan et al., 2018), the WMT-14 en-de translation dataset (Bojar et al., 2014), and the instruction-following dataset Natural Instructions (Mishra et al., 2022; Wang et al., 2022).
  - [On Teacher Hacking in Language Model Distillation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tiapkin25a/tiapkin25a.pdf)
- **T-Eval** (measurements) — *measured_by*
  > We utilize T-Eval (Chen et al., 2023c), which assesses six core competencies: planning, reasoning, retrieval, understanding, instruction following, and reviewing. (Sec. 4.1)
  - [Can Compressed LLMs Truly Act? An Empirical Evaluation of Agentic Capabilities in LLM Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/dong25k/dong25k.pdf)
- **Self-Instruct** (measurements) — *measured_by*
  > Then, we evaluate the trained student models on five instruction-following datasets: Dolly evaluation (Conover et al., 2023), Self-Instruct (Wang et al., 2022a), Super-Natural Instructions (Wang et al., 2022b), Unnatural Instruction(Honovich et al., 2022) and Vicuna evaluation(Chiang et al., 2023). (Section 4.1)
  - [DA-KD: Difficulty-Aware Knowledge Distillation for Efficient Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/he25c/he25c.pdf)
- **Mathematical problem solving** (behaviors tasks) — *causes*
  > math and code problems are formatted as instructions, enhancing instruction following capabilities enables LLMs to better address these tasks. (Section 4)
  - [Data Mixing Optimization for Supervised Fine-Tuning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25bh/li25bh.pdf)
- **FLAN Collection** (measurements) — *measured_by*
  > Table 3 also reports target span perplexities on a randomly sampled subset of the FLAN Collection dataset (Longpre et al., 2023), which features data of instructing following, chain-of-thought, in-context few-shot learning, etc. (Section 3.3).
  - [MUDDFormer: Breaking Residual Bottlenecks in Transformers via Multiway Dynamic Dense Connections](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xiao25d/xiao25d.pdf)
- **C-Eval** (measurements) — *measured_by*
  > Instruction benchmarks evaluate a model’s ability to comprehend and execute detailed directives. ... with C-Eval (Huang et al., 2024) focusing on Chinese instructions.
  - [Benchmarking Large Language Models Under Data Contamination: A Survey from Static to Dynamic Evaluation](https://aclanthology.org/2025.emnlp-main.511.pdf)
- **VoiceBench** (measurements) — *measured_by*
  > ...VoiceBench (Chen et al., 2024c) synthesizes IFEval (Zhou et al., 2023a), a text-based LLM instruction-following benchmark, into speech...
  - [Towards Holistic Evaluation of Large Audio-Language Models: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.514.pdf)
- **Multi-IF** (measurements) — *measured_by*
  > We evaluate the trained models on several widely-used instruction-following benchmarks, including IFEval (Zhou et al., 2023), Multi-IF (He et al., 2024b), SysBench (Qin et al., 2024), FollowBench (Jiang et al., 2024), and CFBench (Zhang et al., 2024a). (Introduction)
  - [VerIF: Verification Engineering for Reinforcement Learning in Instruction Following](https://aclanthology.org/2025.emnlp-main.1542.pdf)
- **CFBench** (measurements) — *measured_by*
  > We evaluate the trained models on several widely-used instruction-following benchmarks, including IFEval (Zhou et al., 2023), Multi-IF (He et al., 2024b), SysBench (Qin et al., 2024), FollowBench (Jiang et al., 2024), and CFBench (Zhang et al., 2024a). (Introduction)
  - [VerIF: Verification Engineering for Reinforcement Learning in Instruction Following](https://aclanthology.org/2025.emnlp-main.1542.pdf)

### → Instruction following
- **In-context learning** (constructs) — *causes*
  > “ICL can marginally help to adapt LMMs to follow instructions.”
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Human preference alignment** (constructs) — *causes*
  > their magical ability to follow myriad user instructions – the driving force behind their mass adoption – has been attributed to instruction fine-tuning and learning from human feedback. (Section 1)
  - [Privately Aligning Language Models with Reinforcement Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/477b39bfb9db99f60914dbfed5f23eb2-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *causes*
  > Instruction Tuning finetunes the pretrained models on demonstrations of instruction following. (Section 4.1.1)
  - [Gumbel Counterfactual Generation From Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e15790966a4a9d85d688635c88ee6d8a-Paper-Conference.pdf)
- **Context retention** (constructs) — *causes*
  > This highlights the memory retention issue in long-context models, which often leads to a loss of coherence and adherence to task instructions. (Section 3.2)
  - [LongGenBench: Benchmarking Long-Form Generation in Long Context LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/141304a37d59ec7f116f3535f1b74bde-Paper-Conference.pdf)
- **Alignment** (constructs) — *causes*
  > Large language models (LLMs) require alignment to effectively and safely follow user instructions. (Abstract)
  - [Nudging: Inference-time Alignment of LLMs via Guided Decoding](https://aclanthology.org/2025.acl-long.623.pdf)
- **Response ranking** (behaviors tasks) — *causes*
  > for tasks like instruction-following and reasoning, techniques such as fusion and ranking are effective for bolstering task performances (Section 2)
  - [An Architecture Search Framework for Inference-Time Techniques](https://raw.githubusercontent.com/mlresearch/v267/main/assets/saad-falcon25a/saad-falcon25a.pdf)
- **Prompt robustness** (constructs) — *causes*
  > This brittleness manifests... as poor instruction following in chatbots and AI agents when commands deviate from those encountered during training (Hong et al., 2024; Sahoo et al., 2025) (Section 1).
  - [PAFT: Prompt-Agnostic Fine-Tuning](https://aclanthology.org/2025.emnlp-main.37.pdf)

### Associated with
- **Helpfulness** (constructs)
  > LMMs must be helpful (e.g., ... follow user instructions)
  - [Beyond task performance: evaluating and reducing the flaws of large multimodal models with in-context-learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/5df817c5dd95293ebf6d1583303a8c73-Paper-Conference.pdf)
- **Reasoning** (constructs)
  > Gemma-7B-Instruct performs better in structured tasks like reasoning and coding, where precise instruction-following is crucial (Section 3.1)
  - [Assessing Safety Risks and Quantization-aware Safety Patching for Quantized Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ci/chen25ci.pdf)
- **Task generalization** (constructs)
  > Instruction Following is often used to evaluate the cross-task generalization of LLMs, and it is dedicated to handling any task described in natural language (Section 2 Related Work).
  - [From Instance Training to Instruction Learning: Task Adapters Generation from Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/50ea4dbd1cff6bd3daef939eff10c092-Paper-Conference.pdf)
- **Robotic manipulation** (behaviors tasks)
  > "Long-horizon manipulation tasks with general instructions often implicitly encapsulate multiple sub-tasks, posing significant challenges in instruction following"
  - [PERIA: Perceive, Reason, Imagine, Act via Holistic Language and Vision Planning for Manipulation](https://proceedings.neurips.cc/paper_files/paper/2024/file/1f6af963e891e7efa229c24a1607fa7f-Paper-Conference.pdf)
- **Accuracy** (constructs)
  > “Truth Alignment = Reasoning Capability + Instruction Following”
  - [CoIN: A Benchmark of Continual Instruction Tuning for Multimodel Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6a45500d9eda640deed90d8a62742be5-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs)
  > This trend suggests that lower learning rates enhance the model’s ability to generalize to unseen tasks requiring knowledge, complex reasoning, and instruction following.
  - [Unveiling the Secret Recipe: A Guide For Supervised Fine-Tuning Small LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b6e2c96bc4702f761d7d108d6e31930f-Paper-Conference.pdf)
- **Safety** (constructs)
  > this balance creates vulnerabilities when the model’s instruction-following objective from u conflicts with the safety goals defined in g.
  - [Goal-Conditioned DPO: Prioritizing Safety in Misaligned Instructions](https://aclanthology.org/2025.naacl-long.369.pdf)
- **Coding** (behaviors tasks)
  > Gemma-7B-Instruct performs better in structured tasks like reasoning and coding, where precise instruction-following is crucial (Section 3.1)
  - [Assessing Safety Risks and Quantization-aware Safety Patching for Quantized Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25ci/chen25ci.pdf)
- **Text generation quality** (constructs)
  > achieving an optimal trade-off between instruction adherence and output quality. (Section 1)
  - [Sparse Activation Editing for Reliable Instruction Following in Narratives](https://aclanthology.org/2025.emnlp-main.1311.pdf)
- **Generation diversity** (constructs)
  > This limitation [in output diversity] hinders their performance in tasks that demand diverse and informative responses, such as open-domain question answering, instruction following, and test-time scaling for reasoning (Zhang et al., 2024a). (Section 1)
  - [G2: Guided Generation for Enhanced Output Diversity in LLMs](https://aclanthology.org/2025.emnlp-main.713.pdf)
- **Cross-lingual generalization** (constructs)
  > We question whether instruction-following capabilities could be directly transferred to new languages without dedicated instruction data, and whether instruction-tuned models could be adapted through continued pretraining, similar to base models. (Section 1)
  - [Instructing Large Language Models for Low-Resource Languages: A Systematic Study for Basque](https://aclanthology.org/2025.emnlp-main.1484.pdf)
- **Information extraction** (behaviors tasks)
  > to identify hallucinations existed in the reference description, we first extract object entities (object nouns and phrases) from it. Here, we leverage the strong instruction following ability of the Large Language Model (LLM). (Sec. 3.2.1)
  - [Image Textualization: An Automatic Framework for Generating Rich and Detailed Image Descriptions](https://proceedings.neurips.cc/paper_files/paper/2024/file/c37d94c04effc86d72ab2258ba9b76c7-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Omni-Judge** (measurements)
  > Then we treat this task as a similar flow of instruction following, where the extraction of the model answer, judgment, and detailed justification are all required to be generated by Omni-Judge. (Section 2.4)
  - [Omni-MATH: A Universal Olympiad Level Mathematic Benchmark for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f9e1e8b56c7e363985ebeb0e9dd1a85c-Paper-Conference.pdf)
- **Paraphrasing** (behaviors tasks)
  > Instruction Following: four tasks to paraphrase, simplify, summarize, or generate stories
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Story generation** (behaviors tasks)
  > Instruction Following: four tasks to paraphrase, simplify, summarize, or generate stories
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **Text summarization** (behaviors tasks)
  > Instruction Following: four tasks to paraphrase, simplify, summarize, or generate stories
  - [LiveBench: A Challenging, Contamination-Limited LLM Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/e4a46394ba5378b3f9a186a5b4c650d1-Paper-Conference.pdf)
- **ShareGPT** (measurements)
  > “ShareGPT is a dialog dataset collected from sharegpt.com, a website collecting user-shared dialog with ChatGPT. This dataset encompasses a wide range of topics, making it suitable as a general instruction tuning set focusing on the instruction-following ability of models.”
  - [Transferable Post-training via Inverse Value Learning](https://aclanthology.org/2025.naacl-long.227.pdf)
