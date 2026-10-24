# MT-Bench
**Type:** Measurement  
**Referenced in:** 266 papers  
**Also known as:** MT Bench, MT-BENCH, MT-bench, MTBench  

## State of the Field

**What it is.** Across the papers, MT-Bench is most commonly described as an LLM-judged benchmark for multi-turn conversation and instruction following, usually using GPT-4 or another strong LLM to score model responses. The prevailing description is a set of 80 high-quality or human-crafted multi-turn, often two-turn, questions across eight domains or categories such as writing, roleplay, reasoning, math, coding, extraction, STEM, and humanities, with scores often given on a 1 to 10 scale; several papers restate this as 160 prompts or 160 open-ended questions by counting the follow-up turns. A smaller line of work instead treats it as a dataset for pairwise comparison or judge evaluation, emphasizing expert human annotations, human preference judgments, or its use as a meta-evaluation benchmark for LLM judges.

**What it is claimed to measure.** Papers use MT-Bench to measure a broad range of outcomes, with links to 23 constructs and 17 behavioral indicators. The prevailing use is to measure instruction following ability and conversational ability, and papers also frequently use it for helpfulness, generalization, and general ability; on the behavioral side, instruction following, multi-turn dialogue, text generation, dialogue generation, and mathematical problem solving recur most often. At the same time, papers report it as measuring or evaluating human preference alignment, reasoning, text generation quality, alignment, utility preservation, and less common targets such as coherence, fluency, contextual understanding, verbosity, coreference resolution, and information extraction.

**Space of uses.** Across the papers, MT-Bench is commonly used alongside other open-ended or general-capability evaluations, especially AlpacaEval, Vicuna Bench, MMLU, Arena-Hard, and Chatbot Arena. Many studies position it as a headline benchmark for instruction-following, chat, alignment, or generation experiments, while others use it more narrowly for compression, decoding speed or efficiency, or post-training checks; several descriptions simply state that models answer a fixed set of multi-turn questions and are then judged by GPT-4 or another LLM. The only explicit relation to another measurement instrument is with LLM-as-a-judge, and several papers also use MT-Bench to test evaluator models or judge correlations rather than base model outputs.

**Concerns raised.** A few papers explicitly note limitations of the judging setup. One says that rating completions with another LLM, such as MT-Bench, is cheaper but suffers from various biases, and papers report different agreement figures, with one describing over 80% agreement with human preference judgments and another reporting a 63% human agreement rate. One additional study notes that, in its MT-Bench open-ended question answering setting, a static scheduler was infeasible because there was no validation set.

## Sources

**[#InsTag: Instruction Tagging for Analyzing Supervised Fine-tuning of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/9dae2a90bae49dc874ce1ca8fcc20879-Paper-Conference.pdf)**
> MT-Bench is a benchmark that uses strong LLMs like GPT-4 to evaluate the multi-turn conversational and instruction-following capabilities of other models.

**[Beyond Reverse KL: Generalizing Direct Preference Optimization with Diverse Divergence Constraints](https://proceedings.iclr.cc/paper_files/paper/2024/file/2b1d1e5affe5fdb70372cd90dd8afd49-Paper-Conference.pdf) (as "MT-bench")**
> GPT-4-based evaluation benchmark for large language models that assesses generation quality through open-ended questions in multi-turn conversations and instruction-following tasks.

**[Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf) (as "MT Bench")**
> A benchmark for evaluating LLMs across diverse instruction-following tasks, used here to assess evaluator models' correlation with human and GPT-4 judgments.

**[The Trickle-down Impact of Reward Inconsistency on RLHF](https://proceedings.iclr.cc/paper_files/paper/2024/file/8c976a95df6a229551cd28c76627edc9-Paper-Conference.pdf) (as "MT-BENCH")**
> An automatic benchmark featuring challenging one-turn and multi-turn reasoning and instruction-following examples, where model responses are graded by GPT-4 on a scale from 1 to 10.

**[Optimized Multi-Token Joint Decoding With Auxiliary Model for LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/438c34f45d7b5d82aef1b6016e695d5a-Paper-Conference.pdf) (as "MTBench")**
> A benchmark used to evaluate model responses on instruction-following or chat-style tasks under different decoding methods.

## Relationships

### → MT-Bench
- **Instruction following** (behaviors tasks) — *measured_by*
  > MT-Bench is a benchmark featuring challenging ONE-TURN or MULTI-TURN reasoning and instruction-following examples, where the model responses are graded by GPT-4 on a scale of 1 (worst) to 10 (best). (Section 6)
  - [The Trickle-down Impact of Reward Inconsistency on RLHF](https://proceedings.iclr.cc/paper_files/paper/2024/file/8c976a95df6a229551cd28c76627edc9-Paper-Conference.pdf)
- **Multi-turn dialogue** (behaviors tasks) — *measured_by*
  > MT-Bench includes a series of open-ended questions that assess LLM capabilities in multi-turn conversations and instruction-following
  - [Beyond Reverse KL: Generalizing Direct Preference Optimization with Diverse Divergence Constraints](https://proceedings.iclr.cc/paper_files/paper/2024/file/2b1d1e5affe5fdb70372cd90dd8afd49-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *measured_by*
  > To evaluate alignment performance, we utilize MT-Bench, a challenging benchmark that is commonly adopted to assess the instruction-following ability. (Section 2.2)
  - [What Makes Good Data for Alignment? A Comprehensive Study of Automatic Data Selection in Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/6091f2bb355e960600f62566ac0e2862-Paper-Conference.pdf)
- **Conversational ability** (constructs) — *measured_by*
  > General tasks: like MT-Bench [15, 42] and AlpacaEval [43], encompass categories such as writing, role-playing, and mathematics, highlighting the models’ comprehensive abilities and multi-turn dialogue performance. (Section 2.1)
  - [WizardArena: Post-training Large Language Models via Simulated Offline Chatbot Arena](https://proceedings.neurips.cc/paper_files/paper/2024/file/ca4aa9acc097e0f606af55bf986cb031-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > In this section, we use MT-Bench (Zheng et al., 2023) to evaluate the quantized models’ free-form text generation capabilities... (Section 6)
  - [Accuracy is Not All You Need](https://proceedings.neurips.cc/paper_files/paper/2024/file/e0e956681b04ac126679e8c7dd706b2e-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > for evaluating model performance on out-of-distribution (OOD) preference data, we utilize datasets such as HHH-Alignment [44], MT-Bench Human Judgements [45], and RewardBench [46] (Section 4).
  - [Regularizing Hidden States Enables Learning Generalizable Reward Model for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/71f7154547c748c8041505521ca433ab-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > Following HelpSteer [12], we use MT Bench [31] to measure helpfulness, TruthfulQA MC2 [36] to measure correctness, and the mean number of characters in MT Bench responses to measure verbosity.
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **General ability** (constructs) — *measured_by*
  > We evaluated the general capabilities of the models on benchmarks related to general-domain chat (MT-Bench [83] and Alpaca-Eval [37]), general MCQs (MMLU [34] and GPQA [54]), and mathematical tasks (MATH [22] and GSM8k [12]). (Section 4.1)
  - [UltraMedical: Building Specialized Generalists in Biomedicine](https://proceedings.neurips.cc/paper_files/paper/2024/file/2dfc26ce9039f00eee4aba0c54931e46-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > Additionally, we evaluated the output quality of the LLM using MT-bench (Zheng et al., 2024) with its provided dataset.
  - [TIS-DPO: Token-level Importance Sampling for Direct Preference Optimization With Estimated Weights](https://proceedings.iclr.cc/paper_files/paper/2025/file/7fb9f39075a5202472676a7531568212-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > MT-bench consists of multi-turn conversations across various domains such as writing, reasoning, math, and coding. (Section 2.2)
  - [What Makes Good Data for Alignment? A Comprehensive Study of Automatic Data Selection in Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/6091f2bb355e960600f62566ac0e2862-Paper-Conference.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > The utility performance is evaluated on MT-Bench(Zheng et al., 2023), IFEval(Zhou et al., 2023) and GSM8K(Cobbe et al., 2021), along with the benign part of XSTest(Röttger et al., 2024). (Section 1).
  - [Improve Safety Training of Large Language Models with Safety-Critical Singular Vectors Localization](https://aclanthology.org/2025.acl-long.245.pdf)
- **Human preference alignment** (constructs) — *measured_by*
  > For assessing human preferences, recent studies have focused on building crowdsourced battle platforms with human ratings as the primary evaluation metric. Typical platforms include Chatbot Arena (Zheng et al., 2023), MT-Bench (Zheng et al., 2023), and AlpacaEval (Li et al., 2023b). (Section 1)
  - [PiCO: Peer Review in LLMs based on Consistency Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/39e9c5913c970e3e49c2df629daff636-Paper-Conference.pdf)
- **Mathematical problem solving** (behaviors tasks) — *measured_by*
  > "MT-bench and Vicuna-bench are designed to test the models’ competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing through both multi-turn and single-turn dialogues."
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Dialogue generation** (behaviors tasks) — *measured_by*
  > For the dialogue generation task, we fine-tune the Llama-2-7B (Touvron et al., 2023) model on a 52k subset of the WizardLM dataset (Xu et al., 2024) and evaluate it using the MT-Bench dataset (Zheng et al., 2024a).
  - [LoRA-Pro: Are Low-Rank Adapters Properly Optimized?](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea184f920a0f0f8d8030aa1bd7ac9fd4-Paper-Conference.pdf)
- **Alignment** (constructs) — *measured_by*
  > To evaluation the generalization capability of MEGALODON on instruction following and alignment, We finetune the base model... Table 3 summarizes the performance of chat models in 7B scale on MT-Bench4. (Section 4.4).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
- **Pairwise comparison** (behaviors tasks) — *measured_by*
  > “open-ended instruction-following benchmarks (MT-Bench, Alpacafarm, and LLMBar), which primarily rely on pairwise comparison task.”
  - [RevisEval: Improving LLM-as-a-Judge via Response-Adapted References](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7ed2318cec3540ca267c3ede12d82fe-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *measured_by*
  > MT-bench (Zheng et al., 2023), which evaluates chatbot responses across various dimensions such as writing, roleplay, coding, mathematics, reasoning, STEM, and humanities, using GPT-4 for grading (Section 5).
  - [WildChat: 1M ChatGPT Interaction Logs in the Wild](https://proceedings.iclr.cc/paper_files/paper/2024/file/9421261e06f1a63a352b068f1ac90609-Paper-Conference.pdf)
- **Evaluation ability** (constructs) — *measured_by*
  > Furthermore, measuring correlation with GPT-4 with 1222 customized score rubrics across four benchmarks (MT Bench, Vicuna Bench, Feedback Bench, Flask Eval) shows similar trends, bolstering PROMETHEUS’s capability as an evaluator LLM. (Abstract)
  - [Prometheus: Inducing Fine-Grained Evaluation Capability in Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/803485352e61e3ebf41221e4776c9fd4-Paper-Conference.pdf)
- **Mathematical reasoning** (constructs) — *measured_by*
  > MT-bench and Vicuna-bench are designed to test the models' competencies in various complex cognitive tasks, including mathematics, reasoning, complex format handling, and writing
  - [Star-Agents: Automatic Data Optimization with LLM Agents for Instruction Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/0852b88e96d973bd4e21b673f51621d0-Paper-Conference.pdf)
- **Verbosity** (constructs) — *measured_by*
  > Following HelpSteer [12], we use MT Bench [31] to measure helpfulness, TruthfulQA MC2 [36] to measure correctness, and the mean number of characters in MT Bench responses to measure verbosity.
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Robustness** (constructs) — *measured_by*
  > Kangaroo shows consistent high performance across different tasks such as QA, Math, and MT Bench, indicating its robustness and versatility. (Section 5.1)
  - [Kangaroo: Lossless Self-Speculative Decoding for Accelerating LLMs via Double Early Exiting](https://proceedings.neurips.cc/paper_files/paper/2024/file/16336d94a5ffca8de019087ab7fe403f-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > PAT can enhance the logical capabilities of the LLMs. We see the scores increase in related aspects of MT-bench such as coding and reasoning.
  - [Fight Back Against Jailbreaking via Prompt Adversarial Tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/759ca99a82e2a9137c6bef4811c8d378-Paper-Conference.pdf)
- **Conversational question answering** (behaviors tasks) — *measured_by*
  > “MT-Bench (Zheng et al., 2023), a challenging benchmark of multi-turn questions”
  - [Backtracking Improves Generation Safety](https://proceedings.iclr.cc/paper_files/paper/2025/file/65beb73449888fabcf601b3a3ef4b3a7-Paper-Conference.pdf)
- **Short-context ability** (constructs) — *measured_by*
  > For short-context evaluation, we employ MMLU (Hendrycks et al., 2021), ARC-C (Clark et al., 2018), Hellaswag (Zellers et al., 2019) and Winogrande (Sakaguchi et al., 2019) for assessing the general language understanding and reasoning capabilities, and MT-Bench (Zheng et al., 2023) for assessing instruction-following capability.
  - [LongPO: Long Context Self-Evolution of Large Language Models through Short-to-Long Preference Optimization](https://proceedings.iclr.cc/paper_files/paper/2025/file/1332893b662f655660c9abdf793230cf-Paper-Conference.pdf)
- **Adaptability** (constructs) — *measured_by*
  > to demonstrate the adaptability of our routers to new LLMs, we report in Table 4 the performance of our routers on MT Bench when they are used to route between two new model pairs (Section 5.2)
  - [RouteLLM: Learning to Route LLMs from Preference Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/5503a7c69d48a2f86fc00b3dc09de686-Paper-Conference.pdf)
- **Open-ended question answering** (behaviors tasks) — *measured_by*
  > We also tested open-ended question answering on MT-Bench (Chiang et al., 2023), a special case where Static scheduler is infeasible due to the absence of a validation set. (Section 5)
  - [Progressive Mixed-Precision Decoding for Efficient LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df4313ecd4875931fbdacc486cc1fcf-Paper-Conference.pdf)
- **Coding** (behaviors tasks) — *measured_by*
  > The benchmark [MTBench] covers diverse tasks such as reasoning, coding, mathematics, and other skill-based domains.
  - [Unveiling the Secret Recipe: A Guide For Supervised Fine-Tuning Small LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b6e2c96bc4702f761d7d108d6e31930f-Paper-Conference.pdf)
- **Preference prediction** (behaviors tasks) — *measured_by*
  > MT-Bench (Zheng et al., 2023) is a preference dataset which compares human preferences of several model outputs on open-ended questions using multi-turn conversations. (Section 3)
  - [Beyond correlation: The impact of human uncertainty in measuring the effectiveness of automatic evaluation and LLM-as-a-judge](https://proceedings.iclr.cc/paper_files/paper/2025/file/8798321486948322be2b4d658744ba72-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > “we utilized the alpaca dataset Taori et al. (2023) for additional fine-tuning on the Llama3-base model and evaluated the outcomes using the MT-Bench Zheng et al. (2023).”
  - [DataGen: Unified Synthetic Dataset Generation via Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a01e69aa9c3c61fcb40ea378e71fc780-Paper-Conference.pdf)
- **Coherence** (constructs) — *measured_by*
  > MT-Bench, on the other hand, provides a fine-grained evaluation through multi-turn conversational tasks, evaluating not just correctness, but also coherence and fluency. (Section 5.2)
  - [Reflection-Window Decoding: Text Generation with Selective Refinement](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tang25a/tang25a.pdf)
- **Fluency** (constructs) — *measured_by*
  > MT-Bench, on the other hand, provides a fine-grained evaluation through multi-turn conversational tasks, evaluating not just correctness, but also coherence and fluency. (Section 5.2)
  - [Reflection-Window Decoding: Text Generation with Selective Refinement](https://raw.githubusercontent.com/mlresearch/v267/main/assets/tang25a/tang25a.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > Contextual Understanding: the final score from MT-Bench. (Section 4.1).
  - [Splitting with Importance-aware Updating for Heterogeneous Federated Learning with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25c/liao25c.pdf)
- **Versatility** (constructs) — *measured_by*
  > These benchmarks are commonly used in the community to assess the conversational versatility of models across a diverse range of queries. (Section 8.1)
  - [AMPO: Active Multi Preference Optimization for Self-play Preference Selection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gupta25c/gupta25c.pdf)
- **Open-ended instruction following** (behaviors tasks) — *measured_by*
  > We employed three challenging benchmarks to evaluate the open-ended instruction-following task: MT-Bench (Zheng et al., 2023), AlpacaEval 2 (Li et al., 2023), and Arena-Hard (Li et al., 2024). (Section 5.1)
  - [Weights-Rotated Preference Optimization for Large Language Models](https://aclanthology.org/2025.emnlp-main.1329.pdf)
- **Information extraction** (behaviors tasks) — *measured_by*
  > MT-Bench (Zheng et al., 2024), consists of 80 multi-turn dialogues spanning various domains, including writing, roleplay, reasoning, math, coding, extraction, STEM, and humanities. (Section 3.1)
  - [FuseChat: Knowledge Fusion of Chat Models](https://aclanthology.org/2025.emnlp-main.1096.pdf)
- **Cross-domain generalization** (constructs) — *measured_by*
  > "we further introduce the complex instruction-following dataset InfoBench(Qin et al., 2024b), the general natural instruction evaluation set MT-Bench (Zheng et al., 2023) and the real-world chatbot evaluation set Arena-hard (Zheng et al., 2023) as cross domain validation."
  - [Self-play with Execution Feedback: Improving Instruction-following Capabilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/62203a74e233e933b160711e791e1a02-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > Additionally, we employ comprehensive benchmarks for different tasks, including MTBench (Zheng et al., 2023) to compare their language understanding and reasoning capabilities across different quantizations. (Section 3.1)
  - [PALMBENCH: A COMPREHENSIVE BENCHMARK OF COMPRESSED LARGE LANGUAGE MODELS ON MOBILE PLATFORMS](https://proceedings.iclr.cc/paper_files/paper/2025/file/a647405740b28a61311ac9cff28772e5-Paper-Conference.pdf)

### Associated with
- **LLM-as-a-judge** (measurements)
  > MT Bench (Zheng et al., 2023) with 160 open-ended questions using LLM-as-a-judge (Section 5)
  - [RouteLLM: Learning to Route LLMs from Preference Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/5503a7c69d48a2f86fc00b3dc09de686-Paper-Conference.pdf)
- **URIAL** (measurements)
  > "we compare the performance of several base models with the URIAL in-context prompt to that of their instruction fine-tuned versions. Table 1 shows the results on MT-Bench"
  - [Is In-Context Learning Sufficient for Instruction Following in LLMs?](https://proceedings.iclr.cc/paper_files/paper/2025/file/41623b137cd34807f56028aa9f6f84a7-Paper-Conference.pdf)
- **Best-of-n sampling** (measurements)
  > To justify the reward can help policy model to generate better answers, we use MT-Bench (Zheng et al., 2023) for evaluation, where we use Llama-3.1-Instruct 8B and 70B and use Critic-RM and baseline RMs to perform Best-of-N sampling (N = 16 in this case).
  - [Self-Generated Critiques Boost Reward Modeling for Language Models](https://aclanthology.org/2025.naacl-long.573.pdf)
