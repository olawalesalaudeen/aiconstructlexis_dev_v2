# Instruction following ability
**Type:** Construct  
**Referenced in:** 634 papers  
**Also known as:** Guideline following, Instruction following, Instruction-following, Instruction-following ability, Instruction-following capability, Task adherence, Constraint following, Rule following, Rule-following, Principle adherence, Instruction compliance, System message following, Instruction fidelity, Rule comprehension, Instruction-following precision, Topic following, Intention following, Constraint adherence, Task-aware ability, Constraints following, Instruction-following capabilities, Rule adherence, Constraint management, General instruction following, Open-ended instruction following, Structural conformity, Complex instruction understanding, Multimodal instruction-following, Multi-turn stability  

## State of the Field

**Definition agreement:** Consensus. Most papers define instruction following ability as a model's ability or tendency to understand, interpret, and comply with natural language instructions or prompt-specified constraints in order to execute the requested task or produce the requested output. Differences are mainly about setting, modality, complexity, or emphasis on formatting and constraints, while only a few outliers apply the term to narrower cases like evaluators, retrievers, embedders, or broader norm-following dispositions.

**Space of definitions.** Across papers, the prevailing usage treats this as a latent ability or capacity to understand, parse, and execute natural-language instructions, and to keep outputs aligned with user intent, task goals, and explicit constraints. Most definitions make constraint satisfaction central, often naming format, style, word limits, JSON validity, requested languages, or multi-step procedures, and several extend the same basic idea to multimodal, multilingual, retrieval, agent, and embodied settings. A smaller line of work defines it more behaviorally, as the observable act of producing a compliant response or action, and a few papers narrow it further to exact-specification matching, system-message compliance over turns, or evaluator-side judgment of whether a response satisfies an instruction.

**Space of facets.** Papers most often organize the concept by what must be followed: guidelines, constraints, rules, system messages, or broader open-ended instructions. Several narrower labels tighten the focus to exact specification matching or condition satisfaction, while one evaluation-oriented line breaks instruction-following into relevance, factuality, and adherence, and system-message work separates constraint violation, instruction misjudgement, and multi-turn instability. The naming is only partly stable: many labels look like setting-specific variants of the same core ability, but a few usages shift meaning more substantially, such as treating rule-following as a disposition toward order and norms rather than prompt-conditioned task execution.

**Space of measurement.** Operationalization is wide: papers link the construct to 27 measurement instruments and 10 behavioral indicators. The most common instruments are MT-Bench, AlpacaEval 2.0, IFEval, Arena-Hard, and AlpacaEval, mostly benchmark suites for conversational or general instruction following; the remaining instruments include other benchmarks, LLM-as-a-judge procedures, and human evaluation. At the response level, papers often check concrete behaviors such as staying within a word limit, emitting valid JSON, answering in the requested format or language, following system-message constraints across turns, or satisfying multiple constraints in one prompt, so the measures usually match the adherence side of the definitions even when the definitions are broader than benchmarked response quality or verifiable compliance.

**Links.** Several papers claim causal relationships from instruction-following ability to chain of thought and tool use, and to several downstream outcomes. A smaller line also claims causal relationships from other capabilities back to instruction-following ability. It is reported to correlate with reasoning, with one paper describing a negative correlation between instruction-following ability and model scale in reasoning tasks, and papers further describe it as related to several other properties and tasks.

## Sources

**[#InsTag: Instruction Tagging for Analyzing Supervised Fine-tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/9dae2a90bae49dc874ce1ca8fcc20879-Paper-Conference.pdf) (as "Instruction-following")**
> The ability of a model to adhere to explicit constraints and rules provided in its prompt, such as formatting requirements or word limits.

**[A Real-World WebAgent with Planning, Long Context Understanding, and Program Synthesis](https://proceedings.iclr.cc/paper_files/paper/2024/file/e91bf7dfba0477554994c6d64833e9d8-Paper-Conference.pdf) (as "Instruction following")**
> The latent ability of an LLM to understand and adhere to complex prompting procedures, such as generating a skeleton and expanding points under specific constraints.

**[An Emulator for Fine-tuning Large Language Models using Small Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/389e161125965c0f0ba50420fee45774-Paper-Conference.pdf) (as "Task adherence")**
> The extent to which a model stays aligned with the desired objective or requested behavior during generation.

**[NEFTune: Noisy Embeddings Improve Instruction Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4bdeeaeb380b35302bbda1823d328c22-Paper-Conference.pdf) (as "Instruction-following ability")**
> The latent capacity of a model to understand and faithfully respond to open-ended user instructions in a coherent and helpful manner.

**[Large Multilingual Models Pivot Zero-Shot Multimodal Learning across Languages](https://proceedings.iclr.cc/paper_files/paper/2024/file/bd54a6d4dc60c82ae989154013e17754-Paper-Conference.pdf) (as "Instruction-following capability")**
> The model's ability to understand and execute user instructions in multimodal contexts, particularly in non-English languages, after instruction tuning.

**[GoLLIE: Annotation Guidelines improve Zero-Shot Information-Extraction](https://proceedings.iclr.cc/paper_files/paper/2024/file/cda04d7ea67ea1376bf8c6962d8541e0-Paper-Conference.pdf) (as "Guideline following")**
> The latent ability of a model to interpret and adhere to detailed annotation instructions, enabling accurate performance on unseen information extraction tasks.

**[Adaptable Logical Control for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d15c16cf5619a2b1606da5fc88e3f1a9-Paper-Conference.pdf) (as "Constraint following")**
> The ability of a model to generate outputs that adhere to a set of strict, formally specified logical rules or constraints.

**[{$\tau$}-bench: A Benchmark for \underline{T}ool-\underline{A}gent-\underline{U}ser Interaction in Real-World Domains](https://proceedings.iclr.cc/paper_files/paper/2025/file/1b126cc38b8638e07bef37e7b2bb72bf-Paper-Conference.pdf) (as "Rule following")**
> The ability of an agent to accurately adhere to complex, domain-specific policies and guidelines provided in a document.

**[Logicbreaks: A Framework for Understanding Subversion of Rule-based Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e2dd37e10bb18ed9d6d488f63094631-Paper-Conference.pdf) (as "Rule-following")**
> The latent ability of a model to reliably adhere to and operate according to a set of prompt-specified instructions or rules.

**[SysBench: Can LLMs Follow System Message?](https://proceedings.iclr.cc/paper_files/paper/2025/file/b917f916e7eed84ffe8f5e63492b2be8-Paper-Conference.pdf) (as "System message following")**
> The ability of a large language model to understand and adhere to a set of pre-defined instructions, or constraints, provided in a system message throughout a conversation.

**[On-the-fly Preference Alignment via Principle-Guided Decoding](https://proceedings.iclr.cc/paper_files/paper/2025/file/bcd1d7a599f33c06f06615429793c69b-Paper-Conference.pdf) (as "Principle adherence")**
> The extent to which a model's behavior conforms to an explicitly provided rule, guideline, or principle during generation.

**[Beyond Content Relevance: Evaluating Instruction Following in Retrieval Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d37a4093931f359eb5fac5a25199db57-Paper-Conference.pdf) (as "Instruction compliance")**
> The degree to which a model’s retrieval outputs satisfy specified instruction conditions rather than only matching query content.

**[MIA-Bench: Towards Better Instruction Following Evaluation of Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/571082ea18d30060177dfcaf662ff0e5-Paper-Conference.pdf) (as "Instruction fidelity")**
> The extent to which a model's response matches the exact specifications of an instruction without deviation.

**[Are Large Vision Language Models Good Game Players?](https://proceedings.iclr.cc/paper_files/paper/2025/file/27881a19f100fdbf57f0ba1c3d499b08-Paper-Conference.pdf) (as "Rule comprehension")**
> The ability to internalize and correctly apply a set of provided rules to a given situation.

**[RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf) (as "Instruction-following precision")**
> The degree to which a response satisfies the specific constraints and intent expressed in an instruction.

**[AEGIS2.0: A Diverse AI Safety Dataset and Risks Taxonomy for Alignment of LLM Guardrails](https://aclanthology.org/2025.naacl-long.306.pdf) (as "Topic following")**
> The latent ability to adhere to dialogue rules about allowed topics, conversation flow, and style in task-oriented conversations.

**[Towards Enhanced Immersion and Agency for LLM-based Interactive Drama](https://aclanthology.org/2025.acl-long.546.pdf) (as "Intention following")**
> The ability of LLM-controlled characters to understand and generate reactions that appropriately fulfill a player's expressed or implied intentions.

**[GAPO: Learning Preferential Prompt through Generative Adversarial Policy Optimization](https://aclanthology.org/2025.acl-long.13.pdf) (as "Constraint adherence")**
> The degree to which a model's generated output complies with a given set of predefined rules or requirements.

**[Don't Half-listen: Capturing Key-part Information in Continual Instruction Tuning](https://aclanthology.org/2025.acl-long.1153.pdf) (as "Task-aware ability")**
> The model's capacity to be sensitive to and correctly interpret key, task-defining information within an instruction, as opposed to relying on superficial patterns.

**[CFBench: A Comprehensive Constraints-Following Benchmark for LLMs](https://aclanthology.org/2025.acl-long.1581.pdf) (as "Constraints following")**
> The ability of a model to both comprehend and strictly adhere to diverse and complex constraints specified within natural language instructions.

**[JI2S: JointInfluence‐Aware Instruction Data Selection for EfficientFine‐Tuning](https://aclanthology.org/2025.emnlp-main.26.pdf) (as "Instruction-following capabilities")**
> The ability of a large language model to understand and accurately execute tasks specified in natural language instructions.

**[Realistic Training Data Generation and Rule Enhanced Decoding in LLM for NameGuess](https://aclanthology.org/2025.emnlp-main.357.pdf) (as "Rule adherence")**
> The latent tendency of an LLM to generate outputs that conform to predefined syntactic or semantic rules, such as subsequence or lookup-based abbreviation patterns, even when not explicitly prompted.

**[EIFBENCH: Extremely Complex Instruction Following Benchmark for Large Language Models](https://aclanthology.org/2025.emnlp-main.1059.pdf) (as "Constraint management")**
> The model's underlying capacity to simultaneously satisfy multiple, diverse constraints across content, format, situation, and style within a single or multi-instruction context.

**[Boosting Multi-Domain Fine-Tuning of Large Language Models through Evolving Interactions between Samples](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liang25q/liang25q.pdf) (as "General instruction following")**
> The ability to comprehend and accurately execute a wide range of tasks specified in natural language prompts.

**[Hi Robot: Open-Ended Instruction Following with Hierarchical Vision-Language-Action Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/shi25d/shi25d.pdf) (as "Open-ended instruction following")**
> The capacity to understand and act on diverse, complex, and non-atomic natural language prompts that require decomposition into executable steps and adaptation over time.

**[Earley-Driven Dynamic Pruning for Efficient Structured Decoding](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25v/sun25v.pdf) (as "Structural conformity")**
> The ability of a model to generate outputs that strictly adhere to a specified formal grammar or structural format.

**[EmbodiedBench: Comprehensive Benchmarking Multi-modal Large Language Models for Vision-Driven Embodied Agents](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yang25f/yang25f.pdf) (as "Complex instruction understanding")**
> The ability to discern and execute a user's core intent from long or convoluted language instructions that may contain irrelevant information.

**[Dysca: A Dynamic and Scalable Benchmark for Evaluating Perception Ability of LVLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2372bb107ef0ba85e47c6a2dc7dafda-Paper-Conference.pdf) (as "Multimodal instruction-following")**
> The tendency to follow natural-language instructions in a multimodal setting, including responding in the requested format.

**[SysBench: Can LLMs Follow System Message?](https://proceedings.iclr.cc/paper_files/paper/2025/file/b917f916e7eed84ffe8f5e63492b2be8-Paper-Conference.pdf) (as "Multi-turn stability")**
> The degree to which an LLM maintains adherence to system-message constraints over successive dialogue turns.

## Relationships

### Instruction following ability →
- **MT-Bench** (measurements) — *measured_by*
  > To evaluate alignment performance, we utilize MT-Bench, a challenging benchmark that is commonly adopted to assess the instruction-following ability. (Section 2.2)
  - [What Makes Good Data for Alignment? A Comprehensive Study of Automatic Data Selection in Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/6091f2bb355e960600f62566ac0e2862-Paper-Conference.pdf)
- **AlpacaEval 2.0** (measurements) — *measured_by*
  > Instruction-following ability. We further benchmark RoAd using AlpacaEval2.0 [9]. (Section 4.1)
  - [3-in-1: 2D Rotary Adaptation for Efficient Finetuning, Efficient Batching and Composability](https://proceedings.neurips.cc/paper_files/paper/2024/file/3dbcadb7beedc2afe32bb23f75dd30ec-Paper-Conference.pdf)
- **IFEval** (measurements) — *measured_by*
  > evaluate it on various tasks, including instruction-following and roleplay (IFEval and MT-Bench)
  - [Compact Language Models via Pruning and Knowledge Distillation](https://proceedings.neurips.cc/paper_files/paper/2024/file/4822991365c962105b1b95b1107d30e5-Paper-Conference.pdf)
- **Arena-Hard** (measurements) — *measured_by*
  > To explore AUTOIF on more natural Instruction-following scenario, we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation. (Section 4).
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **AlpacaEval** (measurements) — *measured_by*
  > We reproduce the experiment of fine-tuning Llama-2-7B-chat on Alpaca [Qi et al., 2024] and find that the instruction-following ability, measured by AlpacaEval [Li et al., 2023a], does not improve after fine-tuning (Table 8). (Section 5)
  - [Keeping LLMs Aligned After Fine-tuning: The Crucial Role of Prompt Templates](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6f034bb216b472fc7d32ec7aff20342-Paper-Conference.pdf)
- **Vicuna-Bench** (measurements) — *measured_by*
  > To rigorously evaluate the instruction-following capabilities of AI models, we utilized three widely used benchmarks: MT-bench, Vicuna-bench, and the WizardLM testset (Section 4.1).
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > To evaluate system message following, similar to (Jiang et al., 2023; Zheng et al., 2023; Wen et al., 2024), we use advanced LLMs as verifier, and ensure evaluation accuracy through manually annotated evaluation checklists and well-designed evaluation prompts. (Section 1)
  - [SysBench: Can LLMs Follow System Message?](https://proceedings.iclr.cc/paper_files/paper/2025/file/b917f916e7eed84ffe8f5e63492b2be8-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > Our experiments include comprehensive evaluations for our ALPAGASUS, incorporating free-form instruction evaluation, various benchmarks, and human studies. (Section 1)
  - [AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf)
- **FollowBench** (measurements) — *measured_by*
  > We evaluate our methods using two widely-used instruction-following benchmarks: IFEval (Zhou et al., 2023) and FollowBench (Jiang et al., 2024b) as main results (Section 4).
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **UltraFeedback** (measurements) — *measured_by*
  > we evaluate DISTILLM-2 for general purpose instruction-following task on AlpacaEval (Li et al., 2023), Evol-Instruct (Xu et al., 2024a), and UltraFeedback (Cui et al., 2024).
  - [DistiLLM-2: A Contrastive Approach Boosts the Distillation of LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ko25a/ko25a.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > When a model struggles to follow instructions accurately, generating CoT explanations becomes more difficult. (Section 3.3)
  - [MMMU-Pro: A More Robust Multi-discipline Multimodal Understanding Benchmark](https://aclanthology.org/2025.acl-long.736.pdf)
- **Tool use** (behaviors tasks) — *causes*
  > lacks sufficient instruction-following ability to invoke tools in a correct format. (Section 4.3)
  - [GTA: A Benchmark for General Tool Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/8a75ee6d4b2eb0b777f549a32a5a5c28-Paper-Datasets_and_Benchmarks_Track.pdf)
- **InfoBench** (measurements) — *measured_by*
  > To explore AUTOIF on more natural Instruction-following scenario, we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation. (Section 4).
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **Self-improvement** (constructs) — *causes*
  > for SLMs, their weaker instruction-following ability and unreliable self-rewarding can mislead self-improvement.
  - [Mutual Reasoning Makes Smaller LLMs Stronger Problem-Solver](https://proceedings.iclr.cc/paper_files/paper/2025/file/35514d533cdc278a7780daf0dbe7d0b7-Paper-Conference.pdf)
- **Reliability** (constructs) — *causes*
  > For reliability, generalization, and portability evaluations, LLaVA-1.5 outperforms BLIP-2 and MiniGPT-4. This improved performance can be attributed to its larger model size and better instruction-following capability... (Section 5.2.1)
  - [MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf)
- **Portability** (constructs) — *causes*
  > For reliability, generalization, and portability evaluations, LLaVA-1.5 outperforms BLIP-2 and MiniGPT-4. This improved performance can be attributed to its larger model size and better instruction-following capability... (Section 5.2.1)
  - [MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf)
- **LLMBar** (measurements) — *measured_by*
  > This is likely because LLMBar emphasizes “instruction-following precision,” where a single golden response exists for the instruction. (Section 4.2)
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)
- **UltraChat** (measurements) — *measured_by*
  > We are interested in the task of instruction-following, for which we use UltraChat (Ding et al., 2023), a large-scale dataset of instructional conversations. (Section 6.1)
  - [L3Ms — Lagrange Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/92d3d2a9801211ca3693ccb2faa1316f-Paper-Conference.pdf)
- **AlpacaFarm** (measurements) — *measured_by*
  > We evaluate another 1,000 instructions and use the AlpacaFarm codebase (Dubois et al., 2024) to judge the responses from two models with GPT-4o. (Section 5.1)
  - [DataMan: Data Manager for Pre-training Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/1abed6ee581b9ceb4e2ddf37822c7fcb-Paper-Conference.pdf)
- **Tool use ability** (constructs) — *causes*
  > Llama3.1-70B-Instruct outperforms Llama3.1-8B-Instruct with EASYTOOL, indicating that models with better instruction-following capabilities can achieve greater improvements with high-quality tool instructions. (Section 5.1)
  - [EASYTOOL: Enhancing LLM-based Agents with Concise Tool Instruction](https://aclanthology.org/2025.naacl-long.44.pdf)
- **CFBench** (measurements) — *measured_by*
  > We introduce CFBench, a comprehensive Chinese benchmark designed to thoroughly evaluate the constraint comprehension and following capabilities of LLMs. (Section 3)
  - [CFBench: A Comprehensive Constraints-Following Benchmark for LLMs](https://aclanthology.org/2025.acl-long.1581.pdf)
- **WildBench** (measurements) — *measured_by*
  > We primarily assess models’ general instruction-following capabilities on three evaluation benchmarks: AlpacaEval2 (Li et al., 2023b), Arena-Hard (Li et al., 2024b) and Wild-Bench (Lin et al., 2024). (Section 5)
  - [R.I.P.: Better Models by Survival of the Fittest Prompts](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yu25u/yu25u.pdf)
- **Evol-Instruct** (measurements) — *measured_by*
  > we evaluate DISTILLM-2 for general purpose instruction-following task on AlpacaEval (Li et al., 2023), Evol-Instruct (Xu et al., 2024a), and UltraFeedback (Cui et al., 2024).
  - [DistiLLM-2: A Contrastive Approach Boosts the Distillation of LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ko25a/ko25a.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > To assess the effectiveness of the selected data, we adopt a multifaceted evaluation strategy targeting the instruction-following capabilities of fine-tuned models. First, we measure performance on several widely used benchmarks, including MT-Bench and the Open LLM benchmarks... (Section 5.1)
  - [JI2S: JointInfluence‐Aware Instruction Data Selection for EfficientFine‐Tuning](https://aclanthology.org/2025.emnlp-main.26.pdf)
- **AraEval** (measurements) — *measured_by*
  > In this paper, we present AraEval, a pioneering and comprehensive evaluation suite speciﬁcally developed to assess the advanced knowledge, reasoning, truthfulness, and instruction-following capabilities of foundation models in the Arabic context. (Abstract)
  - [AraEval: An Arabic Multi-Task Evaluation Suite for Large Language Models](https://aclanthology.org/2025.emnlp-main.1679.pdf)
- **Reasoning** (constructs) — *correlates*
  > we are the first to identify the negative correlation between instruction-following ability and model scale in reasoning tasks: while larger models exhibit stronger reasoning capabilities, their adherence to instructions tends to decline.
  - [DICE: Structured Reasoning in LLMs through SLM-Guided Chain-of-Thought Correction](https://aclanthology.org/2025.emnlp-main.355.pdf)
- **PLLuM-Align** (measurements) — *measured_by*
  > For scalar multi-attribute rating, annotators evaluated each response on a 5-point Likert scale across seven criteria: i) truthfulness, (ii) linguistic correctness, (iii) safety, (iv) fairness, (v) conciseness, (vi) coherence & reasoning, as well as vii) helpfulness & instruction-following.
  - [PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf)
- **Generality** (constructs) — *causes*
  > For reliability, generalization, and portability evaluations, LLaVA-1.5 outperforms BLIP-2 and MiniGPT-4. This improved performance can be attributed to its larger model size and better instruction-following capability... (Section 5.2.1)
  - [MMKE-Bench: A Multimodal Editing Benchmark for Diverse Visual Knowledge](https://proceedings.iclr.cc/paper_files/paper/2025/file/01fb6de3360f9e32862665580e2c5853-Paper-Conference.pdf)

### → Instruction following ability
- **Instruction fine-tuning** (behaviors tasks) — *causes*
  > Instruction tuning has been widely adopted to tailor the behavior of base Large Language Models (LLMs) to align with specific tasks and user intents... The success of instruction tuning depends on the availability of high-quality instruction datasets.
  - [Stronger Models are Not Always Stronger Teachers for Instruction Tuning](https://aclanthology.org/2025.naacl-long.224.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > Refinement preference pairs enhance instruction-following capability more effectively. (Section 3.5)
  - [SPaR: Self-Play with Tree-Search Refinement to Improve Instruction-Following in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/abe1eb21ceb046209c96a0f5e7544ccc-Paper-Conference.pdf)
- **Stability** (constructs) — *causes*
  > This suggests that the top layers’ weights indeed lack sufficient stability gradient to maintain instruction-following ability initially. (Section 3.2)
  - [Efficient Domain Continual pretraining by Mitigating the Stability Gap](https://aclanthology.org/2025.acl-long.1578.pdf)

### Associated with
- **Verbalized confidence** (measurements)
  > While consistency-based and verbalization-based methods have demonstrated their effectiveness in recent LMs, their utilization is largely restricted due to their high computational costs during inference and the requirement for LM’s instruction-following capability. (Section 2.2)
  - [LitCab: Lightweight Language Model Calibration over Short- and Long-form Responses](https://proceedings.iclr.cc/paper_files/paper/2024/file/3815d62554efad0878fad6c1c30ffda0-Paper-Conference.pdf)
- **Grounding** (constructs)
  > Errors in grounding valid actions highlight a limitation in the model’s ability to follow instructions and format actions correctly (Section 4.3).
  - [AgentBoard: An Analytical Evaluation Board of Multi-turn LLM Agents](https://proceedings.neurips.cc/paper_files/paper/2024/file/877b40688e330a0e2a3fc24084208dfa-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Alignment** (constructs)
  > methods for effectively ‘aligning’ these models; i.e., steering them to follow user instructions effectively and safely, has garnered increasing attention.
  - [A Critical Evaluation of AI Feedback for Aligning Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/33870b3e099880cd8e705cd07173ac27-Paper-Conference.pdf)
- **Soundness** (constructs)
  > Our logic-based framework establishes a method to detect and describe when and how an LLM disobeys prompt-specified rules. We model rule-following as inference in propositional Horn logic (Brachman & Levesque, 2004), a mathematical system in which rules take the form “If P and Q, then R” for some propositions P, Q, and R. This is a common approach for rule-based tasks (Chu et al., 2023; Ligeza, 2006), and serves as a simple yet expressive foundation that lets us formally define three properties — monotonicity, maximality, and soundness — that exactly characterize rule-following. (Section 1)
  - [Logicbreaks: A Framework for Understanding Subversion of Rule-based Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/4e2dd37e10bb18ed9d6d488f63094631-Paper-Conference.pdf)
- **Multi-turn dialogue** (behaviors tasks)
  > Can LLMs continuously follow the system message in multi-turn conversations? (Section 3.1)
  - [SysBench: Can LLMs Follow System Message?](https://proceedings.iclr.cc/paper_files/paper/2025/file/b917f916e7eed84ffe8f5e63492b2be8-Paper-Conference.pdf)
- **Constraint satisfaction** (constructs)
  > accurately following system messages is still challenging, which requires the model to satisfy all the constraints pre-set in the system messages
  - [SysBench: Can LLMs Follow System Message?](https://proceedings.iclr.cc/paper_files/paper/2025/file/b917f916e7eed84ffe8f5e63492b2be8-Paper-Conference.pdf)
- **Relevance** (constructs)
  > Specifically, we define three fundamental dimensions of instruction-following: relevance, factuality, and adherence. (Abstract)
  - [CAMIEval: Enhancing NLG Evaluation through Multidimensional Comparative Instruction-Following Analysis](https://aclanthology.org/2025.naacl-long.438.pdf)
- **Factuality** (constructs)
  > Specifically, we define three fundamental dimensions of instruction-following: relevance, factuality, and adherence. (Abstract)
  - [CAMIEval: Enhancing NLG Evaluation through Multidimensional Comparative Instruction-Following Analysis](https://aclanthology.org/2025.naacl-long.438.pdf)
- **Text summarization** (behaviors tasks)
  > Weaker instruction-following at 128k length. For summarization tasks, the summaries generated by Llama-3.1-70B-Instruct at 128k tokens become longer and often contain details not present in the reference. (Section 7.1)
  - [On Many-Shot In-Context Learning for Long-Context Evaluation](https://aclanthology.org/2025.acl-long.1245.pdf)
- **Catastrophic forgetting** (behaviors tasks)
  > While CPT is effective at introducing domain concepts, it often leads to significant forgetting of general concepts and instruction-following capabilities. (Section 3.2.1)
  - [Demystifying Domain-adaptive Post-training for Financial LLMs](https://aclanthology.org/2025.emnlp-main.1579.pdf)
- **OASST1** (measurements)
  > "we fine-tuned LLaMA3-8B using a single NVIDIA A100 GPU on the Oasst1 dataset, which is an instruction-following dataset"
  - [PaCA: Partial Connection Adaptation for Efficient Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/6b4fd4a4607f57fe65b5e276bdb17ed1-Paper-Conference.pdf)
- **Utility preservation** (constructs)
  > As a foundation model, f ′ is expected to retain abilities such as text and code generation, question answering, instruction-following, and basic mathematical reasoning.
  - [Tool Unlearning for Tool-Augmented LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25a/cheng25a.pdf)
