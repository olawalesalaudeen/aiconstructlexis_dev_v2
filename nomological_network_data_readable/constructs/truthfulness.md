# Truthfulness
**Type:** Construct  
**Referenced in:** 36 papers  
**Also known as:** Response truthfulness, Skill-specific truthfulness  

## State of the Field

**Definition agreement:** Consensus. Most papers define truthfulness as a property of a model's outputs or answers being factually accurate, aligned with reality, and not misleading, false, hallucinated, or unsupported, sometimes with emphasis on factual QA, misconceptions, or RAG settings. A rare outlier discusses the model's internal encoding of truthfulness as multifaceted and task-dependent, but the dominant usage is still the same core output-level phenomenon.

**Space of definitions.** Across papers, the prevailing usage treats truthfulness as a response-level property: outputs should be factually accurate, aligned with reality or verifiable knowledge, and avoid false, misleading, hallucinatory, or misinforming content. Many papers frame it through questions designed to trigger misconceptions or false answers learned from imitation, and some add that truthful responses should remain grounded regardless of user beliefs or preferences. Smaller lines of work narrow it to the correctness of generated claims in a RAG setting, or instead describe truthfulness as an internal, non-universal encoding that varies with the skill required by a task.

**Space of facets.** Papers do not organize truthfulness in one shared way, but several recurring distinctions appear. Some split it into response truthfulness versus attribution groundedness, and one paper argues that models encode multiple, skill-specific notions of truth rather than a single universal one. Other papers place truthfulness within broader trustworthiness frameworks, sometimes dividing trustworthiness into robustness and truthfulness, distinguish it from honesty as stating what is objectively true rather than what a model believes, and treat it as related but not identical to informativeness, hallucination, coherence, and abstention.

**Space of measurement.** Operationalizations span 12 measurement instruments and 5 behavioral indicators. The most prevalent instrument is TruthfulQA, used as adversarial questions, multiple-choice items, and open-generation prompts to test whether models identify true claims, avoid reproducing falsehoods, and handle misconceptions; other linked instruments include LLM-as-a-judge setups that ask GPT-4 or trained judge models to score truthfulness, the Open LLM Leaderboard, AraEval, and CodeMixBench, alongside several other instruments. Papers also use manual evaluation, open-ended question answering and text generation settings, and one RAG paper measures response truthfulness through per-sample Answer Correctness recall for gold claims, so most measurements follow the dominant output-focused definition, while one definition instead concerns internal skill-specific encoding.

**Links.** Papers connect truthfulness to 11 constructs and 5 behavioral indicators. They make mixed claims about alignment and human preference alignment: some claim causal relationships from RLHF or alignment to more truthful outputs, while another claims a causal relationship from human preference alignment to lower truthfulness. Truthfulness is also reported to correlate with sycophancy, to be related to hallucination and broader trust or evaluation notions, and several other papers claim causal relationships from intervention or elicitation methods; one paper further claims a causal relationship from truthfulness to utility, stating that increasing truthfulness negatively impacts utility.

## Sources

**[LLäMmlein: Transparent, Compact and CompetitiveGerman-Only Language Models from Scratch](https://aclanthology.org/2025.acl-long.111.pdf)**
> The degree to which the model avoids generating false or misleading information, particularly when faced with questions designed to elicit misconceptions.

**[Measuring and Enhancing Trustworthiness of LLMs in RAG through Grounded Attributions and Learning to Refuse](https://proceedings.iclr.cc/paper_files/paper/2025/file/4c88827decab6c046b881a2c3a99c76f-Paper-Conference.pdf) (as "Response truthfulness")**
> A quality of an LLM's generated claims in a RAG context, specifically focusing on the correctness of the claims themselves.

**[LLMs Know More Than They Show: On the Intrinsic Representation of LLM Hallucinations](https://proceedings.iclr.cc/paper_files/paper/2025/file/a712d461e57201efe35d429a6f1731c1-Paper-Conference.pdf) (as "Skill-specific truthfulness")**
> The property that a model's internal encoding of truthfulness is not universal, but rather multifaceted and dependent on the specific cognitive skill required by a task, such as factual retrieval or common-sense reasoning.

## Relationships

### Truthfulness →
- **TruthfulQA** (measurements) — *measured_by*
  > The dataset evaluates a model’s ability to not generate false answers learnt from imitation learning on text. (Section 3)
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > We prompt GPT-4 to evaluate the informativeness (Info) and truthfulness (True) of model responses given the question and the gold labels. (Section 6).
  - [LoFiT: Localized Fine-tuning on LLM Representations](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements) — *measured_by*
  > These benchmarks give us a glimpse into model knowledge, reasoning, and truthfulness. (Section 4)
  - [NEFTune: Noisy Embeddings Improve Instruction Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4bdeeaeb380b35302bbda1823d328c22-Paper-Conference.pdf)
- **UltraFeedback** (measurements) — *measured_by*
  > UltraFeedback [7]: a multi-aspect alignment dataset with 64K prompts with preferences obtained from GPT-4, including "Instruction following", "Honest", "Truthful", and "Helpful" objectives (Section 4.1).
  - [MetaAligner: Towards Generalizable Multi-Objective Alignment of Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3d03800841fa1bb2f43ef1750aafcce4-Paper-Conference.pdf)
- **Linear probing** (measurements) — *measured_by*
  > “One prevalent approach in these studies is linear probing ... which involves developing a binary classifier for each concerned module ... Since the classifiers are trained to categorize internal representations as either ‘true’ or ‘false’, they can effectively identify which components’ outputs lead to ‘true’ or ‘false’ answers.”
  - [Causally Motivated Sycophancy Mitigation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a52b0d191b619477cc798d544f4f0e4b-Paper-Conference.pdf)
- **Utility preservation** (constructs) — *causes*
  > Additionally, increase in truthfulness negatively impacts utility (-15%). (Section 1)
  - [AI-LieDar : Examine the Trade-off Between Utility and Truthfulness in LLM Agents](https://aclanthology.org/2025.naacl-long.595.pdf)
- **Human annotation study** (measurements) — *measured_by*
  > For each episode, three graduate students annotate the AI agent’s truthfulness using both fine-grained (distinguishing between Concealment and Equivocation) and coarse-grained (using the Partial Lie category) metrics. (Section 4.2)
  - [AI-LieDar : Examine the Trade-off Between Utility and Truthfulness in LLM Agents](https://aclanthology.org/2025.naacl-long.595.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > We perform a manual evaluation of 400 responses for truthfulness and informativeness, with 100 questions and three responses from four models... (Section 3.2.1)
  - [Truth Knows No Language: Evaluating Truthfulness Beyond English](https://aclanthology.org/2025.acl-long.1507.pdf)
- **SimpleQA** (measurements) — *measured_by*
  > We take SimpleQA (Wei et al., 2024b) for truthfulness... (Section 3.1)
  - [STAIR: Improving Safety Alignment with Introspective Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cx/zhang25cx.pdf)
- **BLEURT** (measurements) — *measured_by*
  > “For open-ended text generation tasks, we follow the standard practice (Lin et al., 2021) and utilize two sets of metrics: (1) BLEURT score, which is determined by whether the generated text is closer to correct or incorrect answers, measured by BLEURT model (Sellam et al., 2020)”
  - [TruthFlow: Truthful LLM Generation via Representation Flow Correction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25i/wang25i.pdf)
- **FINTRUST** (measurements) — *measured_by*
  > we curate 15, 680 instances to evaluate LLM trustworthiness in the financial domain. We ... incorporate seven core dimensions: Truthfulness, Safety, Fairness, Robustness, Privacy, Transparency, and Knowledge Discovery. (Section 2)
  - [FinTrust: A Comprehensive Benchmark of Trustworthiness Evaluation in Finance Domain](https://aclanthology.org/2025.emnlp-main.512.pdf)
- **CodeMixBench** (measurements) — *measured_by*
  > we introduce the CodeMixBench, a code-mixing evaluation benchmark including eight tasks–three for evaluating LLMs (knowledge reasoning, mathematical reasoning, and truthfulness) and five for traditional NLP tasks (LID, POS, NER, SA, and MT). (§1)
  - [CodeMixBench: Evaluating Code-Mixing Capabilities of LLMs Across 18 Languages](https://aclanthology.org/2025.emnlp-main.109.pdf)
- **AraEval** (measurements) — *measured_by*
  > In this paper, we present AraEval, a pioneering and comprehensive evaluation suite speciﬁcally developed to assess the advanced knowledge, reasoning, truthfulness, and instruction-following capabilities of foundation models in the Arabic context. (Abstract)
  - [AraEval: An Arabic Multi-Task Evaluation Suite for Large Language Models](https://aclanthology.org/2025.emnlp-main.1679.pdf)
- **PLLuM-Align** (measurements) — *measured_by*
  > For scalar multi-attribute rating, annotators evaluated each response on a 5-point Likert scale across seven criteria: i) truthfulness, (ii) linguistic correctness, (iii) safety, (iv) fairness, (v) conciseness, (vi) coherence & reasoning, as well as vii) helpfulness & instruction-following.
  - [PLLuM-Align: Polish Preference Dataset for Large Language Model Alignment](https://aclanthology.org/2025.emnlp-main.1219.pdf)

### → Truthfulness
- **Hallucination** (behaviors tasks) — *causes*
  > LLMs are prone to hallucinations [53] and misunderstandings of text, especially in specific technical domains, that can lead to a lack of truthfulness from the model [35].
  - [CTIBench: A Benchmark for Evaluating LLMs in Cyber Threat Intelligence](https://proceedings.neurips.cc/paper_files/paper/2024/file/5acd3c628aa1819fbf07c39ef73e7285-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Human preference alignment** (constructs) — *causes*
  > the effects on other trustworthiness aspects are negative: ... truthfulness decreases by 25%... (Section 1)
  - [More RLHF, More Trust? On The Impact of Preference Alignment On Trustworthiness](https://proceedings.iclr.cc/paper_files/paper/2025/file/732c5757aa5577de9b103332cf7ac0bf-Paper-Conference.pdf)
- **Alignment** (constructs) — *causes*
  > Reinforcement Learning from Human Feedback (RLHF) is a technique that can be used to align an agent — such as a Large Language Model (LLM) — to human preferences and lead to more truthful, more helpful, less harmful and more preferred outputs [29]. (Introduction)
  - [Would I Lie To You? Inference Time Alignment of Language Models using Direct Preference Heads](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad3d0ac42b4b5cc3b5f0ca10107d5c84-Paper-Conference.pdf)
- **Uncertainty quantification** (constructs) — *causes*
  > Uncertainty quantification (UQ) is a prominent approach for eliciting truthful answers from large language models (LLMs).
  - [Token-Level Density-Based Uncertainty Quantification Methods for Eliciting Truthfulness of Large Language Models](https://aclanthology.org/2025.naacl-long.113.pdf)

### Associated with
- **Trustworthiness** (constructs)
  > Specifically, we divide model trustworthiness into robustness and truthfulness.
  - [LLMCBench: Benchmarking Large Language Model Compression for Efficient Deployment](https://proceedings.neurips.cc/paper_files/paper/2024/file/9f4cc62d0632911c63163ea3d9ec19bd-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Informativeness** (constructs)
  > This finding highlights the critical importance of assessing informativeness metrics specifically for non-instruction-tuned models, as failing to do so may result in misleadingly high truthfulness scores. (Section 5)
  - [Truth Knows No Language: Evaluating Truthfulness Beyond English](https://aclanthology.org/2025.acl-long.1507.pdf)
- **Sycophancy** (constructs)
  > Sycophancy causes models to produce answers that cater to user expectations rather than providing truthful responses. (Abstract)
  - [Self-Augmented Preference Alignment for Sycophancy Reduction in LLMs](https://aclanthology.org/2025.emnlp-main.625.pdf)
- **Honesty** (constructs)
  > According to Evans et al. (2021); Park et al. (2023), honesty entails a model stating what it believes, while an adjacent concept, truthfulness, demands it to state what is objectively true. (Section 5.1)
  - [Alignment for Honesty](https://proceedings.neurips.cc/paper_files/paper/2024/file/7428e6db752171d6b832c53b2ed297ab-Paper-Conference.pdf)
- **Robustness** (constructs)
  > Truthfulness involves a dual consideration of hallucination and robustness. (Section 2.1)
  - [MLLMGuard: A Multi-dimensional Safety Evaluation Suite for Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d9dcd4ebef57f1839d871fe7d891e91-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Abstention** (behaviors tasks)
  > It evaluates whether models can provide factually accurate responses, or appropriately abstain when uncertain. (Section 2.1)
  - [FinTrust: A Comprehensive Benchmark of Trustworthiness Evaluation in Finance Domain](https://aclanthology.org/2025.emnlp-main.512.pdf)
- **Open-ended question answering** (behaviors tasks)
  > We examine CRITIC across diverse tasks: free-form question answering concentrates on truthfulness related to open-ended general factual knowledge (Section 4)
  - [CRITIC: Large Language Models Can Self-Correct with Tool-Interactive Critiquing](https://proceedings.iclr.cc/paper_files/paper/2024/file/fef126561bbf9d4467dbb8d27334b8fe-Paper-Conference.pdf)
- **Controllability** (constructs)
  > GPT-4o shows a 40% increase in truthfulness when prompted, and this pattern is observed across most models, with the stronger models exhibiting more pronounced shifts toward truthfulness. (Section 5.3)
  - [AI-LieDar : Examine the Trade-off Between Utility and Truthfulness in LLM Agents](https://aclanthology.org/2025.naacl-long.595.pdf)
