# Hallucination
**Type:** Behavior  
**Referenced in:** 647 papers  
**Also known as:** Hallucinated response generation, Factuality hallucination, Hallucinated tool calling, Soliloquizing, Hallucinatory success, Hallucinated content generation, Confusion, Generating false preambles, Non-factual response generation, Hallucinated reasoning, Hallucinated geometry, Hallucinated citations, Cross-modal hallucination, Factual inconsistency, Hallucinated generation, Knowledge hallucination  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats hallucination as generated content that is factually incorrect, fabricated, nonsensical, misleading, or unfaithful, especially when it is not grounded in the input, source context, retrieved evidence, training facts, or established world knowledge. Many papers count it whenever an output adds unsupported material, contradicts the source or ground truth, fails to convey the queried fact, or contains any ungrounded span. A smaller line of work narrows the criterion to setting-specific failures, such as answering false-premise or unanswerable questions instead of recognizing unanswerability, inventing tools or parameters, fabricating numbers or equations, producing hallucinated observations, citing non-existent legal sections, or declaring a task complete when required steps remain undone.

**Variants.** A recurring set of variants appears in multimodal work, especially object, action, visual, and cross-modal hallucination, where models mention absent objects, events, sounds, attributes, positions, or other scene details. Another recurring family appears in reasoning and agent settings, including hallucinated reasoning paths and explanations, hallucinated tool calling, soliloquizing, and hallucinatory success. Papers also study source-conditioned forms in summarization, simplification, question answering, code, and literature review, using names such as factual inconsistency, confusion, in-document and out-document hallucinations, false preambles, hallucinated citations or references, and knowledge hallucination.

**Space of elicitation and scores.** Hallucination is measured by 29 linked instruments. The most frequently linked are POPE, CHAIR, MMHal-Bench, TruthfulQA, and AMBER: papers use these to test object existence or caption errors, response-level hallucination across question types, truthful factual question answering, and existence, attribute, or relation hallucinations. Other papers also use judge-based scoring with GPT-4 or other LLMs, manual annotation, and additional benchmark or detection suites.

**What it is taken as evidence of.** Papers link hallucination to 46 constructs, most often Factuality and Faithfulness, and then Reliability, Trustworthiness, and Multimodal alignment. The dominant pattern ties hallucination to low factuality or low faithfulness: papers describe it as related to these constructs, some use factuality-oriented evaluations to measure it, and some claim causal relationships between Hallucination and Factuality or Faithfulness. A second recurring pattern links Hallucination to Reliability and Trustworthiness, usually through related links or papers claiming a causal relationship from Hallucination to those constructs, while multimodal papers connect it to Multimodal alignment by claiming that misalignment can lead to Hallucination; overall, papers do not converge on a single construct it reflects.

## Sources

**[Aligning Large Language Models with Representation Editing: A Control Perspective](https://proceedings.neurips.cc/paper_files/paper/2024/file/41bba7b0f5c81e789a20bb16a370aeeb-Paper-Conference.pdf)**
> The observable act of a model generating factually incorrect or nonsensical information that is not grounded in its input or training data.

**[Strong Model Collapse](https://proceedings.iclr.cc/paper_files/paper/2025/file/284afdc2309f9667d2d4fb9290235b0c-Paper-Conference.pdf) (as "Misinformation generation")**
> Producing incorrect factual content as an observable failure mode linked to model collapse.

**[Can Video LLMs Refuse to Answer? Alignment for Answerability in Video Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d77402f07113388562f5b51eaee89573-Paper-Conference.pdf) (as "Hallucinated response generation")**
> The observable behavior of a model producing a factually incorrect or speculative response to a question, particularly when the question's premise is not supported by the video content.

**[Knowledge Boundary of Large Language Models: A Survey](https://aclanthology.org/2025.acl-long.256.pdf) (as "Factuality hallucination")**
> The specific observable behavior where a model's generated output diverges from established real-world facts.

**[Reducing Tool Hallucination via Reliability Alignment](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ap/xu25ap.pdf) (as "Hallucinated tool calling")**
> The observable generation of invalid tool calls, including fabricated tools, incorrect parameters, or redundant invocations not grounded in the user input or task requirements.

**[EnIGMA: Interactive Tools Substantially Assist LM Agents in Finding Security Vulnerabilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abramovich25a/abramovich25a.pdf) (as "Soliloquizing")**
> An observable phenomenon where a language model self-generates a complete thought-action-observation loop, including a hallucinated observation, in a single response without interacting with the environment.

**[What Limits Virtual Agent Application? OmniBench: A Scalable Multi-Dimensional Benchmark for Essential Virtual Agent Capabilities](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bu25b/bu25b.pdf) (as "Hallucinatory success")**
> Incorrectly concluding that a task has been completed when key steps remain unexecuted, often due to weak contextual memory.

**[SAE-SSV: Supervised Steering in Sparse Representation Spaces for Reliable Control of Language Models](https://aclanthology.org/2025.emnlp-main.112.pdf) (as "Hallucinated content generation")**
> The observable behavior of generating factually incorrect or counterfactual statements, often as the target of a truthfulness steering intervention.

**[JUDGEBERT: Assessing Legal Meaning Preservation Between Sentences](https://aclanthology.org/2025.emnlp-main.5.pdf) (as "Confusion")**
> The introduction of factual errors in the simplified text that contradict the original, such as reversing the direction of a requirement (e.g., claiming the opposite of what the source states).

**[Autoformalization in the Wild: Assessing LLMs on Real-World Mathematical Definitions](https://aclanthology.org/2025.emnlp-main.90.pdf) (as "Generating false preambles")**
> An observable error where the model generates non-existent or invalid preambles, such as library imports, for a formal code block.

**[FacLens: Transferable Probe for Foreseeing Non-Factuality in Fact-Seeking Question Answering of Large Language Models](https://aclanthology.org/2025.emnlp-main.937.pdf) (as "Non-factual response generation")**
> The observable behavior in which an LLM produces an answer to a fact-seeking question that fails to convey the correct, verifiable fact.

**[Enhancing Study-Level Inference from Clinical Trial Papers via Reinforcement Learning-Based Numeric Reasoning](https://aclanthology.org/2025.emnlp-main.1544.pdf) (as "Hallucinated reasoning")**
> Producing reasoning steps that are not supported by the input evidence, involving fabricated or incorrect justifications for outputs.

**[Out of Sight, Not Out of Context? Egocentric Spatial Reasoning in VLMs Across Disjoint Frames](https://aclanthology.org/2025.emnlp-main.816.pdf) (as "Hallucinated geometry")**
> Generating confident but unfounded claims about object size, position, or visibility that are inconsistent with the actual scene structure.

**[NitiBench: Benchmarking LLM Frameworks on Thai Legal Question Answering Capabilities](https://aclanthology.org/2025.emnlp-main.1739.pdf) (as "Hallucinated citations")**
> An observable error where a model cites legal sections that are irrelevant or non-existent in its generated answer.

**[AVHBench: A Cross-Modal Hallucination Benchmark for Audio-Visual Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/3cc685788a311fa35d8d41df93e288ca-Paper-Conference.pdf) (as "Cross-modal hallucination")**
> A phenomenon where a model generates outputs based on cross-interactions between modalities that are not present in the input signals, such as hearing imaginary sounds from visual cues or seeing fake events from audio cues.

**[Discourse-Driven Evaluation: Unveiling Factual Inconsistency in Long Document Summarization](https://aclanthology.org/2025.naacl-long.103.pdf) (as "Factual inconsistency")**
> The phenomenon where a model-generated summary contains information that contradicts or is unsupported by the source document or established world knowledge.

**[INSIDE: LLMs' Internal States Retain the Power of Hallucination Detection](https://proceedings.iclr.cc/paper_files/paper/2024/file/0d1986a61e30e5fa408c81216a616e20-Paper-Conference.pdf) (as "Hallucinated generation")**
> The observable output of a model producing factually incorrect or nonsensical text.

**[KoLA: Carefully Benchmarking World Knowledge of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c26719edf1e6fba8f1ca7d3938e27785-Paper-Conference.pdf) (as "Knowledge hallucination")**
> The phenomenon of a model generating plausible but factually incorrect or non-existent knowledge.

## Relationships

### Hallucination →
- **POPE** (measurements) — *measured_by*
  > Similar results are seen in other tasks, like the hallucination question "Is there a car in the image?" from POPE.
  - [Matryoshka Query Transformer for Large Vision-Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/59c147c7d4fdb732daea3064eab949bf-Paper-Conference.pdf)
- **CHAIR** (measurements) — *measured_by*
  > “The CHAIR metric ... evaluates the exact match between generated and ground-truth image captions”
  - [Alleviating Hallucinations in Large Vision-Language Models through Hallucination-Induced Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/dde040998d82553cf7f689e8ae173d5a-Paper-Conference.pdf)
- **MMHal-Bench** (measurements) — *measured_by*
  > MMHal-Bench is designed to quantify hallucinations with the assistance of GPT-4 [43]. (Section 4.2)
  - [Automated Multi-level Preference for MLLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/2e3073cb65608aa887bb945c382e687f-Paper-Conference.pdf)
- **LLM-as-a-judge** (measurements) — *measured_by*
  > To measure hallucination on the realistic tasks, we use GPT-4 as an evaluator (OpenAI, 2023), following Yue et al. (2023); Gao et al. (2023a). (Section 3.2)
  - [Teaching Language Models to Hallucinate Less with Synthetic Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/e4cd50120b6d7e8daff1749d6bbaa889-Paper-Conference.pdf)
- **TruthfulQA** (measurements) — *measured_by*
  > Building upon previous studies [62, 22], we utilized the TrustfulQA benchmark [26] for evaluating the tendency of models to produce hallucinations (Section 5.2)
  - [Adversarial Representation Engineering: A General Model Editing Framework for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4630f7c0660d944c132455c124e7d90-Paper-Conference.pdf)
- **AMBER** (measurements) — *measured_by*
  > AMBER (Wang et al., 2023a) was designed to be evaluated without LLM assistance. ... Metrics: ... (c) Response-level hallucination (Hal); (d) Human cognition hallucination (Cog). (Sec. 5.1)
  - [CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf)
- **Trustworthiness** (constructs) — *causes*
  > hallucinations — non-factual or non-sensical information generated by the model — have become challenging barriers to trustworthy and reliable artificial intelligence
  - [Stealth edits to large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c8168a8eca2eb23f6b1f5019371043e-Paper-Conference.pdf)
- **Reliability** (constructs) — *causes*
  > Long CoT suffers from high cost for training and exhibits low reliability due to table content hallucinations. (Abstract)
  - [RoT: Enhancing Table Reasoning with Iterative Row-Wise Traversals](https://aclanthology.org/2025.emnlp-main.29.pdf)
- **HaluEval** (measurements) — *measured_by*
  > We further verify this hypothesis by measuring the capabilities coefficient on a generative benchmark (TruthfulQA Generation [45]) and a discriminative benchmark (HaluEval [43]). (Appendix A.5)
  - [Safetywashing: Do AI Safety Benchmarks Actually Measure Safety Progress?](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ebcdd0de471c027e67a11959c666d74-Paper-Datasets_and_Benchmarks_Track.pdf)
- **HallusionBench** (measurements) — *measured_by*
  > HallusionBench (Guan et al., 2024) evaluates visual illusions and knowledge hallucinations, featuring 346 images and 1129 questions. (Sec. 5.1)
  - [CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf)
- **Truthfulness** (constructs) — *causes*
  > LLMs are prone to hallucinations [53] and misunderstandings of text, especially in specific technical domains, that can lead to a lack of truthfulness from the model [35].
  - [CTIBench: A Benchmark for Evaluating LLMs in Cyber Threat Intelligence](https://proceedings.neurips.cc/paper_files/paper/2024/file/5acd3c628aa1819fbf07c39ef73e7285-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MME** (measurements) — *measured_by*
  > To evaluate HIO’s capability on object-level and attribute-level hallucination, we compare it with several state-of-the-art Decoding methods on MME. (Section 6.2).
  - [Alleviating Hallucinations in Large Vision-Language Models through Hallucination-Induced Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/dde040998d82553cf7f689e8ae173d5a-Paper-Conference.pdf)
- **Uncertainty** (constructs) — *correlates*
  > we go beyond merely understanding knowledge refusal, and find SAE latents, seemingly representing uncertainty, that are predictive of incorrect answers.
  - [Do I Know This Entity? Knowledge Awareness and Hallucinations in Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c1c44e46358e0fb94dc94ec495a7fb1a-Paper-Conference.pdf)
- **SelfCheckGPT** (measurements) — *measured_by*
  > and also evaluate its ability to correct Hallucination in SelfCheckGPT [48]. (Section 3.1)
  - [WISE: Rethinking the Knowledge Memory for Lifelong Model Editing of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/60960ad78868fce5c165295fbd895060-Paper-Conference.pdf)
- **Object HalBench** (measurements) — *measured_by*
  > “On the Object HalBench dataset, CHiP outperforms DPO in hallucination reduction”
  - [CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf)
- **Human evaluation** (measurements) — *measured_by*
  > To address this, we extend human evaluation guidelines from Clark et al. (2023), assessing repetition, fluency, coherence, compatibility (ROCStories/DialogSum), and hallucination (DeliData): (Section 4.2)
  - [Segment-Level Diffusion: A Framework for Controllable Long-Form Generation with Diffusion Language Models](https://aclanthology.org/2025.acl-long.210.pdf)
- **GAVIE** (measurements) — *measured_by*
  > To efficiently measure the hallucination generated by LMMs, we propose GPT4-Assisted Visual Instruction Evaluation (GAVIE), a stable approach to evaluate visual instruction tuning like human experts. (ABSTRACT)
  - [Mitigating Hallucination in Large Multi-Modal Models via Robust Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/fed9263d7f1086e735904ff690527a53-Paper-Conference.pdf)
- **ZsRE** (measurements) — *measured_by*
  > Our experiments require a source of hallucinations to edit, which we draw from the Multi-CounterFact (MCF) [26] and ZsRE [27] datasets. (Section 5)
  - [Stealth edits to large language models](https://proceedings.neurips.cc/paper_files/paper/2024/file/5c8168a8eca2eb23f6b1f5019371043e-Paper-Conference.pdf)
- **MMLongBench-Doc** (measurements) — *measured_by*
  > These three types of questions evaluate the LVLMs’s long-context DU capabilities from complementary aspects: the localization ability, the cross-page comprehension ability, and the hallucination severity, respectively. (Section 3.4)
  - [MMLONGBENCH-DOC: Benchmarking Long-context Document Understanding with Visualizations](https://proceedings.neurips.cc/paper_files/paper/2024/file/ae0e43289bffea0c1fa34633fc608e92-Paper-Datasets_and_Benchmarks_Track.pdf)
- **MMBench-Video** (measurements) — *measured_by*
  > we further introduce three additional L-2 capabilities specific to MMBench-Video: Hallucination, Commonsense Reasoning, and Temporal Reasoning.
  - [MMBench-Video: A Long-Form Multi-Shot Benchmark for Holistic Video Understanding](https://proceedings.neurips.cc/paper_files/paper/2024/file/a2326c9715a516c91174132e0170073a-Paper-Datasets_and_Benchmarks_Track.pdf)
- **BFCL** (measurements) — *measured_by*
  > Accuracy performance comparison on BFCL-v3 leaderboard (updated on 09/20/2024). ... Hallucination (Table 2)
  - [ToolACE: Winning the Points of LLM Function Calling](https://proceedings.iclr.cc/paper_files/paper/2025/file/663865ea167425c6c562cb0b6bcf76c7-Paper-Conference.pdf)
- **APIBench** (measurements) — *measured_by*
  > We also evaluate APIBench in Halluation Rate. (Section 4.1)
  - [Tool-Planner: Task Planning with Clusters across Multiple Tools](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f605d59a0dbde101518b552cb616ddf-Paper-Conference.pdf)
- **LLMEval** (measurements) — *measured_by*
  > Then, for each example, we can rate it as “correct” or “abstain” or “hallucinate” depending on the LLMEval output. (Section 4.2)
  - [Sufficient Context: A New Lens on Retrieval Augmented Generation Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/33dffa2e3d2ab74a783d1a8c292f66d9-Paper-Conference.pdf)
- **Geometric reasoning** (constructs) — *causes*
  > State-of-the-art MLLMs suffer severe hallucination on geometric figures, which greatly hinders their abilities on solving geometric problems. (Figure 1)
  - [G-LLaVA: Solving Geometric Problem with Multi-Modal Large Language Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/09afabe33dc7db66530dea6483b22e5d-Paper-Conference.pdf)
- **Representational stability** (constructs) — *correlates*
  > We comprehensively present and analyze the correlation between vision feature stability and model hallucinations in Section 3. (Section 1).
  - [Reducing Hallucinations in Large Vision-Language Models via Latent Space Steering](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4008025c2182bfe16fcc8566ee14d64-Paper-Conference.pdf)
- **BLINK** (measurements) — *measured_by*
  > Some efforts include POPE (Li et al., 2023g), LLaVA-RLHF (Sun et al., 2023), BLINK (Fu et al., 2024), and Rohrbach et al. (2018); Biten et al. (2022) are the few examples that consider multimodal hallucination. (Section 5.1)
  - [Towards Rationality in Language and Multimodal Agents: A Survey](https://aclanthology.org/2025.naacl-long.186.pdf)
- **Fact checking** (behaviors tasks) — *causes*
  > the LLM world knowledge conversion produces hallucinatory evidence, directly impacting claim validation (Section 4.7)
  - [IMRRF: Integrating Multi-Source Retrieval and Redundancy Filtering for LLM-based Fake News Detection](https://aclanthology.org/2025.naacl-long.461.pdf)
- **CAA** (measurements) — *measured_by*
  > Seven concepts, relevant to the helpful, honest, and harmless of LLMs, are included from CAA dataset (Rimsky et al., 2024): AI Coordination (AIC., for short), Corrigibility (CORR.), Hallucination (HALLU.), Myopic Reward (MR.), Survival Instinct (SI.), Sycophancy (SYC.), and Refusal (REF.).
  - [Cross-model Transferability among Large Language Models on the Platonic Representations of Concepts](https://aclanthology.org/2025.acl-long.185.pdf)
- **LongFact** (measurements) — *measured_by*
  > hallucination on LongFact (Figure 1).
  - [Aligning Large Language Models to Follow Instructions and Hallucinate Less via Effective Data Filtering](https://aclanthology.org/2025.acl-long.804.pdf)
- **FActScore** (measurements) — *measured_by*
  > it enables direct measurement of hallucination using metrics such as FActScore (Min et al., 2023) and SAFE (Wei et al., 2024) (Section 1)
  - [Can Knowledge Graphs Make Large Language Models More Trustworthy? An Empirical Study Over Open-ended Question Answering](https://aclanthology.org/2025.acl-long.622.pdf)
- **SAFE** (measurements) — *measured_by*
  > it enables direct measurement of hallucination using metrics such as FActScore (Min et al., 2023) and SAFE (Wei et al., 2024) (Section 1)
  - [Can Knowledge Graphs Make Large Language Models More Trustworthy? An Empirical Study Over Open-ended Question Answering](https://aclanthology.org/2025.acl-long.622.pdf)
- **FaithEval** (measurements) — *measured_by*
  > As shown in Table 5, the ablation study on FaithEval (Ming et al., 2024) demonstrates that OpAmp not only enhances robustness to noisy contexts but also reduces hallucinations as a valuable secondary benefit.
  - [Efficient OpAmp Adaptation for Zoom Attention to Golden Contexts](https://aclanthology.org/2025.acl-long.653.pdf)
- **Verbalized confidence** (measurements) — *measured_by*
  > Furthermore, we replace the hallucination detection module in DSSP-RAG with two existing methods: Trained Probes, Verbalization and Hybrid Consistency (Hyb-Cons). (Section 4.3.3)
  - [Bridging External and Parametric Knowledge: Mitigating Hallucination of LLMs with Shared-Private Semantic Synergy in Dual-Stream Knowledge](https://aclanthology.org/2025.emnlp-main.549.pdf)
- **Activation patching** (measurements) — *measured_by*
  > It [Activation patching] localizes model components associated with hallucinations (Monea et al., 2024; Deng et al., 2025) and biases (Vig et al., 2020)
  - [Interpretation Meets Safety: A Survey on Interpretation Methods and Tools for Improving LLM Safety](https://aclanthology.org/2025.emnlp-main.1091.pdf)
- **Logit lens** (measurements) — *measured_by*
  > The logit lens has been leveraged to investigate LLMs’ knowledge store and recall mechanisms (Haviv et al., 2023; Yu et al., 2023) and safety issues, such as hallucinations
  - [Interpretation Meets Safety: A Survey on Interpretation Methods and Tools for Improving LLM Safety](https://aclanthology.org/2025.emnlp-main.1091.pdf)
- **Expert evaluation** (measurements) — *measured_by*
  > Due to incomplete text annotations on the MMHal, GPT-4 couldn't reliably detect hallucinations. To make the results more reliable, we invited experts to manually annotate the data
  - [CHiP: Cross-modal Hierarchical Direct Preference Optimization for Multimodal LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c73e9595126794186536cfbbed012f-Paper-Conference.pdf)
- **Planning** (constructs) — *causes*
  > LLMs often experience hallucinations (Huang et al., 2023), which present two major challenges in planning. First, they might struggle to assess if a plan is achievable given a specific problem description (Aghzal et al., 2023; Kambhampati, 2024). (Section 10)
  - [PlanGenLLMs: A Modern Survey of LLM Planning Capabilities](https://aclanthology.org/2025.acl-long.958.pdf)
- **Reasoning faithfulness** (constructs) — *causes*
  > LLMs still struggle with conducting faithful reasoning due to issues of lack of knowledge and hallucination (Section 1).
  - [Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25t/luo25t.pdf)

### → Hallucination
- **Factuality** (constructs) — *causes*
  > underscores the need to develop effective and generalizable methods for fine-grained factuality alignment to reduce hallucinations in Large Language Models (LLMs).
  - [Mask-DPO: Generalizable Fine-grained Factuality Alignment of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/6bf82fdcbd92b6a7793b3894422d2437-Paper-Conference.pdf)
- **Faithfulness** (constructs) — *correlates*
  > Informative Context Improves Faithfulness and Reduces Hallucination.
  - [RAGChecker: A Fine-grained Framework for Diagnosing Retrieval-Augmented Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/27245589131d17368cccdfa990cbf16e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multimodal alignment** (constructs) — *causes*
  > Misalignment between modalities can lead to safety risks such as biased or inappropriate content generation (Gong et al., 2023; Tu et al., 2023) and hallucinations, where outputs are not grounded in visual input (Wang et al., 2023).
  - [Fine-Grained Verifiers: Preference Modeling as Next-token Prediction in Vision-Language Alignment](https://proceedings.iclr.cc/paper_files/paper/2025/file/7c1f8ca17d2f0bdf82c73abafb577837-Paper-Conference.pdf)
- **Language bias** (constructs) — *causes*
  > language bias in VLMs, a common issue for VLMs that often leads to hallucination when faced with extensive textual context. (ABSTRACT)
  - [MMICL: Empowering Vision-language Model with Multi-Modal In-Context Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/41128e5b3a7622da5b17588757599077-Paper-Conference.pdf)
- **Calibration** (constructs) — *causes*
  > Calibrating language models (LMs) is crucial, as it plays a vital role in detecting and mitigating hallucinations of LMs as well as building more trustworthy models. (ABSTRACT)
  - [LitCab: Lightweight Language Model Calibration over Short- and Long-form Responses](https://proceedings.iclr.cc/paper_files/paper/2024/file/3815d62554efad0878fad6c1c30ffda0-Paper-Conference.pdf)
- **Tool use** (behaviors tasks) — *causes*
  > Recent studies have shown that LLMs can mitigate hallucination by accessing general-purpose tools (Schick et al., 2023; Tang et al., 2023; Patil et al., 2023; Qin et al., 2023; Wang et al., 2024b). (Section 1)
  - [Adapting While Learning: Grounding LLMs for Scientific Problems with Tool Usage Adaptation](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lyu25a/lyu25a.pdf)
- **Visual grounding** (constructs) — *causes*
  > Several causes of hallucinations have been identified including biased training data (Liu et al., 2023), the inability of vision encoders to accurately ground images (Jain et al., 2024), misalignment among different modalities (Liu et al., 2024b), and insufficient context attention in LLM decoders (Huang et al., 2024; Liu et al., 2024d). (Section 2.2)
  - [Mitigating Hallucinations in Vision-Language Models through Image-Guided Head Suppression](https://aclanthology.org/2025.emnlp-main.631.pdf)
- **Explanation generation** (behaviors tasks) — *causes*
  > produces more explanations matching golden explanations but also generates redundant QA pairs, potentially leading to hallucination issues
  - [MEQA: A Benchmark for Multi-hop Event-centric Question Answering with Explanations](https://proceedings.neurips.cc/paper_files/paper/2024/file/e560a0b22e4432003d0dba63ff8dc457-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Knowledge boundary awareness** (constructs) — *causes*
  > “The knowledge boundary of an LLM limits its factual understanding, beyond which it may begin to hallucinate.”
  - [Perception of Knowledge Boundary for Large Language Models through Semi-open-ended Question Answering](https://proceedings.neurips.cc/paper_files/paper/2024/file/a1e0d6fa0c30b7d4f75dd9c7ed6189f2-Paper-Conference.pdf)
- **Overconfidence** (constructs) — *causes*
  > tuning LLMs on data containing unseen knowledge can encourage models to be overconfident, leading to hallucinations (Section 2).
  - [Aligning Large Language Models to Follow Instructions and Hallucinate Less via Effective Data Filtering](https://aclanthology.org/2025.acl-long.804.pdf)
- **Self-correction** (behaviors tasks) — *causes*
  > to prevent hallucinations in LLMs, such as sacrificing solving accuracy to avoid execution errors, the model alignment and self-correction mechanism are adopted in LLMOPT. (Abstract)
  - [LLMOPT: Learning to Define and Solve General Optimization Problems from Scratch](https://proceedings.iclr.cc/paper_files/paper/2025/file/fbe6dd68b0cf2b1d43b458d2b8ca31b0-Paper-Conference.pdf)
- **Predictive uncertainty** (constructs) — *causes*
  > When an LLM is uncertain about the semantic meaning of the next tokens to generate, it is likely to start hallucinating. Thus, it has been suggested that predictive uncertainty is one of the main causes of hallucinations. (Abstract)
  - [Improving Uncertainty Estimation through Semantically Diverse Language Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b94d8b035e2183e47afef9e2f299ba47-Paper-Conference.pdf)
- **Logical consistency** (constructs) — *causes*
  > A logically consistent LLM is less likely to hallucinate since its response is unlikely to change due to the logical manipulation of the prompt.
  - [Logical Consistency of Large Language Models in Fact-Checking](https://proceedings.iclr.cc/paper_files/paper/2025/file/3209cf3312b2cbb68e33644362ddc2bd-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *causes*
  > Asking the Constructor to complete the whole chain reduces hallucination, and avoids a sub-optimal greedy approach. (Section 3.2)
  - [KiRAG: Knowledge-Driven Iterative Retriever for Enhancing Retrieval-Augmented Generation](https://aclanthology.org/2025.acl-long.929.pdf)
- **Text generation** (behaviors tasks) — *causes*
  > We theorise that as the VLLMs have not been explicitly trained on image-language pairs of manipulated images, a large number of parameters on the language generation leads to more hallucinations [25, 79] for this simple but abstract task. (Section 5.1)
  - [A Hitchhiker's Guide to Fine-Grained Face Forgery Detection Using Common Sense Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/059d2b9188cdb7ae00f4d78cc9469704-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Detailed image description** (behaviors tasks) — *correlates*
  > Results in Tab.6 show that longer captions tend to have higher hallucination rates. (Section 4.5)
  - [MiniGPT-4: Enhancing Vision-Language Understanding with Advanced Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/50623630a2372839c078474efa6c0cb8-Paper-Conference.pdf)
- **Reversal curse** (constructs) — *causes*
  > A well-studied failure mode underlying hallucinations is the reversal curse
  - [The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf)
- **Long-context reasoning** (constructs) — *causes*
  > This trend underscores that larger graph sizes, and their associated challenges in long-range multi-step reasoning, are major contributors to hallucination.
  - [GraphArena: Evaluating and Exploring Large Language Models on Graph Computation](https://proceedings.iclr.cc/paper_files/paper/2025/file/77fa8253adfc8b33209639f3e9985741-Paper-Conference.pdf)
- **Code generation** (behaviors tasks) — *causes*
  > Results in Table 2 show that this code-writing approach effectively reduced hallucination rates, particularly on large graphs.
  - [GraphArena: Evaluating and Exploring Large Language Models on Graph Computation](https://proceedings.iclr.cc/paper_files/paper/2025/file/77fa8253adfc8b33209639f3e9985741-Paper-Conference.pdf)
- **Visual perception** (constructs) — *causes*
  > Recent work indicates that enhanced visual perception significantly reduces hallucinations and improves performance on resolution-sensitive tasks, such as optical character recognition and document analysis. (ABSTRACT)
  - [Eagle: Exploring The Design Space for Multimodal LLMs with Mixture of Encoders](https://proceedings.iclr.cc/paper_files/paper/2025/file/e78457d4a04b8565f1fe5077df13cddb-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *causes*
  > The third example demonstrates a case where both the original and the counterfactual model hallucinate (the subject of the sentence was actually an academic), but the content of the hallucination changes as a result of the intervention.
  - [Gumbel Counterfactual Generation From Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e15790966a4a9d85d688635c88ee6d8a-Paper-Conference.pdf)
- **Alignment** (constructs) — *causes*
  > ...they still face reliability issues such as hallucinations, stemming from misalignment with human instructions... (Section 1)
  - [Anyprefer: An Agentic Framework for Preference Data Synthesis](https://proceedings.iclr.cc/paper_files/paper/2025/file/56fbf5a2109a6c17372209c9fa698857-Paper-Conference.pdf)
- **Aleatoric uncertainty** (constructs) — *correlates*
  > This approach provides a precise measure of aleatoric semantic uncertainty, detecting whether the initial text is likely to be hallucinated. (Abstract)
  - [Improving Uncertainty Estimation through Semantically Diverse Language Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b94d8b035e2183e47afef9e2f299ba47-Paper-Conference.pdf)
- **Knowledge grounding** (constructs) — *causes*
  > In this way, we can force the skill LoRA to ground the LLM’s answers to its internal knowledge, thus reducing hallucinations. (Section 1)
  - [Fictitious Synthetic Data Can Improve LLM Factuality via Prerequisite Learning](https://proceedings.iclr.cc/paper_files/paper/2025/file/98ecdc722006c2959babbdbdeb22eb75-Paper-Conference.pdf)
- **Synthetic recall** (behaviors tasks) — *causes*
  > completely pruning retrieval heads leads to failure in retrieving relevant information and results in hallucination, while pruning random non-retrieval heads does not affect the model’s retrieval ability. (Abstract)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)
- **Epistemic uncertainty** (constructs) — *causes*
  > Overall, we find strong evidence that accounting for weight uncertainty can improve decoding and reduce hallucinations when finetuning and pretraining from scratch, even without computational overhead. (Introduction)
  - [Uncertainty-Aware Decoding with Minimum Bayes Risk](https://proceedings.iclr.cc/paper_files/paper/2025/file/1588dc2b2ef339d6e4c47d212e36f991-Paper-Conference.pdf)
- **Visual reasoning** (constructs) — *causes*
  > existing tuning methods train models to provide conclusive responses to instructions based on visual inputs, causing them to overlook essential intermediate visual reasoning. This often leads to ... even generating hallucinations. (Section 1)
  - [CogCoM: A Visual Language Model with Chain-of-Manipulations Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/1dcee1cd6890ab7fcdf173ec10526da9-Paper-Conference.pdf)
- **Image reconstruction** (behaviors tasks) — *causes*
  > This approach encourages LMMs to maintain low-level details, thereby enhancing their fine-grained comprehension abilities and reducing hallucinations. (Section 1)
  - [Reconstructive Visual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/259a5df46308d60f8454bd4adcc3b462-Paper-Conference.pdf)
- **Visual understanding** (constructs) — *causes*
  > engaging the MLLMs with a more powerful capability of image understanding so as to enhance the mitigation of hallucination. (Section 1)
  - [Mitigating Hallucinations in Multi-modal Large Language Models via Image Token Attention-Guided Decoding](https://aclanthology.org/2025.naacl-long.75.pdf)
- **Language modeling** (behaviors tasks) — *causes*
  > because each next word is treated equally, models tend to form associations between co-occurring words. As a result, they may hallucinate words commonly associated with the context to solve a problem inherently irrelevant to these words (confirmation bias) (Section 1).
  - [ToW: Thoughts of Words Improve Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.157.pdf)
- **Abstention** (behaviors tasks) — *causes*
  > CDA successfully shifts the distribution towards abstention, preventing hallucinations. (Section 6.6, Figure 10)
  - [When to Speak, When to Abstain: Contrastive Decoding with Abstention](https://aclanthology.org/2025.acl-long.479.pdf)
- **Self-awareness** (constructs) — *causes*
  > This capability [self-awareness] would help mitigate hallucinations, discourage attempts at solving unsolvable problems, and prevent engagement in unethical tasks, ensuring more responsible and reliable behavior.
  - [Position: LLMs Need a Bayesian Meta-Reasoning Framework for More Robust and Generalizable Reasoning](https://raw.githubusercontent.com/mlresearch/v267/main/assets/yan25g/yan25g.pdf)
- **Preference learning** (behaviors tasks) — *causes*
  > “recent works utilizing preference optimization have demonstrated significant performance in hallucination mitigation”
  - [DAMA: Data- and Model-aware Alignment of Multi-modal LLMs](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lu25m/lu25m.pdf)
- **Memorization** (constructs) — *causes*
  > However, when the attacker’s merging rate is high, the merged model fails to retain the victim model’s memorization ability, leading to hallucination phenomenon. (Section 5.4.1)
  - [Merger-as-a-Stealer: Stealing Targeted PII from Aligned LLMs with Model Merging](https://aclanthology.org/2025.emnlp-main.295.pdf)
- **Consistency** (constructs) — *correlates*
  > smaller attentive consistency scores and larger non-attentive consistency scores indicate greater probabilities of hallucinations.
  - [Attention-guided Self-reflection for Zero-shot Hallucination Detection in Large Language Models](https://aclanthology.org/2025.emnlp-main.1063.pdf)

### Associated with
- **Image captioning** (behaviors tasks)
  > Dispreferred response: Model-generated descriptions resulting from either (1) corrupted image with low resolution or distorted color, or (2) “bad” prompts that cause the base model to hallucinate and describe elements that may not logically exist in the image. (Section 4)
  - [Enhancing Large Vision Language Models with Self-Training on Image Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/ed45d6a03de84cc650cae0655f699356-Paper-Conference.pdf)
- **Object hallucination** (behaviors tasks)
  > In the realm of MLLMs, “hallucination” typically refers to “object hallucination,” where the models generate plausible outputs containing objects that are either absent from or mismatched with the images (Section 2)
  - [Unleashing Region Understanding in Intermediate Layers for MLLM-based Referring Expression Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/da76884a4e003ad0de97804ec4578e5b-Paper-Conference.pdf)
- **Visual question answering** (behaviors tasks)
  > This issue is particularly prevalent in tasks such as image captioning and visual question answering (Liu et al., 2023a; Yin et al., 2023; Zhou et al., 2023b; Zhu et al., 2024a; Gunjal et al., 2024), where maintaining coherence between modalities is critical. (Section 2)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **Groundedness** (constructs)
  > Do groundedness predictions detect argument hallucinations? (Section 6.3)
  - [ConQRet: A New Benchmark for Fine-Grained Automatic Evaluation of Retrieval Augmented Computational Argumentation](https://aclanthology.org/2025.naacl-long.293.pdf)
- **Abstractive summarization** (behaviors tasks)
  > Hallucinations in the abstractive summarization setting are grounding errors: errors where the output contains some information that is not supported by the context. (Section 2.1)
  - [Teaching Language Models to Hallucinate Less with Synthetic Tasks](https://proceedings.iclr.cc/paper_files/paper/2024/file/e4cd50120b6d7e8daff1749d6bbaa889-Paper-Conference.pdf)
- **Chain-of-thought reasoning** (constructs)
  > These hallucinations (Maynez et al., 2020) are particularly problematic in domains that require multi-step reasoning, since a single logical error is enough to derail a much larger solution. (Section 1).
  - [Let's Verify Step by Step](https://proceedings.iclr.cc/paper_files/paper/2024/file/aca97732e30bcf1303bc22ac3924fd16-Paper-Conference.pdf)
- **Knowledge storage** (constructs)
  > They still struggle with issues such as hallucinations [5–7]... and these problems are exacerbated by the enigmatic internal mechanisms of knowledge storage within language models. (Introduction)
  - [Knowledge Circuits in Pretrained Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/d6df31b1be98e04be48af8bedb95b499-Paper-Conference.pdf)
- **Knowledge retrieval** (behaviors tasks)
  > Hallucinations pose a significant hurdle to the adoption of language models, especially in domains where reliable knowledge retrieval is paramount (Dahl et al., 2024). (Section 1)
  - [The Factorization Curse: Which Tokens You Predict Underlie the Reversal Curse and More](https://proceedings.neurips.cc/paper_files/paper/2024/file/cbcce87f745072c819204529be843d16-Paper-Conference.pdf)
- **Honesty** (constructs)
  > we first refine and extend the definition of honesty in LLMs based on the definition proposed by Askell et al. [14], as the ability to recognize their limitations, remain objective without pandering, and thereby avoid spreading misinformation or inducing hallucinations. (Section 1)
  - [HonestLLM: Toward an Honest and Helpful Large Language Model](https://proceedings.neurips.cc/paper_files/paper/2024/file/0d99a8c048befb6dd6e17d7684adacac-Paper-Conference.pdf)
- **Generalization** (constructs)
  > This lack of proper evaluation can then materialize in persistent issues of deployed systems related to generalization, e.g., hallucination [30], out-of-distribution generalization [39], fairness [6], and generalization to the long-tail [23, 24]. (Section 1).
  - [No Free Delivery Service: Epistemic limits of passive data collection in complex social systems](https://proceedings.neurips.cc/paper_files/paper/2024/file/b97fc02c9e536d68300d82be05c23aa2-Paper-Conference.pdf)
- **Confidence** (constructs)
  > generating nonfactual responses with unwarranted confidence. (Section 1)
  - [HaDeMiF: Hallucination Detection and Mitigation in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c98987c5ec4f30920d7190dc699e3daf-Paper-Conference.pdf)
- **Video detailed captioning** (behaviors tasks)
  > We observed that generating all captions in a single conversation round often introduces hallucinations in the detailed captions. (Section 3.1.2)
  - [AuroraCap: Efficient, Performant Video Detailed Captioning and a New Benchmark](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aebc17b683792a17dd4a24fcb038ba6-Paper-Conference.pdf)
- **Counting** (behaviors tasks)
  > Our benchmark encompasses six novel hallucination scenarios ... each covering ﬁve different tasks, i.e. object recognition, counting, attribute recognition, spatial reasoning, and action prediction.
  - [MMDT: Decoding the Trustworthiness and Safety of Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0bcfb525c8f8f07ae10a93d0b2a40e00-Paper-Conference.pdf)
- **Attribute recognition** (behaviors tasks)
  > Our benchmark encompasses six novel hallucination scenarios ... each covering ﬁve different tasks, i.e. object recognition, counting, attribute recognition, spatial reasoning, and action prediction.
  - [MMDT: Decoding the Trustworthiness and Safety of Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0bcfb525c8f8f07ae10a93d0b2a40e00-Paper-Conference.pdf)
- **Action prediction** (behaviors tasks)
  > Our benchmark encompasses six novel hallucination scenarios ... each covering ﬁve different tasks, i.e. object recognition, counting, attribute recognition, spatial reasoning, and action prediction.
  - [MMDT: Decoding the Trustworthiness and Safety of Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/0bcfb525c8f8f07ae10a93d0b2a40e00-Paper-Conference.pdf)
- **Style transfer** (behaviors tasks)
  > First, we observe repetitions and hallucinations in some transferred texts. (Limitations)
  - [Style Transfer with Multi-iteration Preference Optimization](https://aclanthology.org/2025.naacl-long.135.pdf)
- **Code summarization** (behaviors tasks)
  > in the context of code summarisation, hallucination can be defined as a condition in which the generated summary does not accurately capture the intent and implementation details of the given input code. (Section 1)
  - [ETF: An Entity Tracing Framework for Hallucination Detection in Code Summaries](https://aclanthology.org/2025.acl-long.1480.pdf)
- **Catastrophic forgetting** (behaviors tasks)
  > (Zhai et al., 2023) deem that the hallucination in large models is related to the catastrophic forgetting in continual tuning. (Section 5.4. Analysis of Examples)
  - [Large Continual Instruction Assistant](https://raw.githubusercontent.com/mlresearch/v267/main/assets/qiao25e/qiao25e.pdf)
- **Closed-book question answering** (behaviors tasks)
  > One significant challenge in CBQA is addressing hallucinations-instances where the model generates incorrect or fabricated answers (Section 2).
  - [Analyzing the Effects of Supervised Fine-Tuning on Model Knowledge from Token and Parameter Levels](https://aclanthology.org/2025.emnlp-main.25.pdf)
- **Verbal uncertainty** (constructs)
  > Hallucinations arise from a miscalibration between VU and SU, where the model fails to express its high uncertainty in its generated output. (Section 4)
  - [Calibrating Verbal Uncertainty as a Linear Feature to Reduce Hallucinations](https://aclanthology.org/2025.emnlp-main.187.pdf)
- **Semantic uncertainty** (constructs)
  > Hallucinations arise from a miscalibration between VU and SU, where the model fails to express its high uncertainty in its generated output. (Section 4)
  - [Calibrating Verbal Uncertainty as a Linear Feature to Reduce Hallucinations](https://aclanthology.org/2025.emnlp-main.187.pdf)
- **Interpretability and explainability** (constructs)
  > ...problematic due to the opaque nature of LLMs’ parametric knowledge, which leads to poor interpretability and frequent hallucination issues. (Section 1)
  - [MusKGC: A Flexible Multi-source Knowledge Enhancement Framework for Open-World Knowledge Graph Completion](https://aclanthology.org/2025.emnlp-main.508.pdf)
- **Text-to-speech synthesis** (behaviors tasks)
  > LLM-based TTS systems face challenges, with hallucinations being a prominent issue (Sahoo et al., 2024; Song et al., 2024; Neekhara et al., 2024a; Borsos et al., 2023).
  - [Koel-TTS: Enhancing LLM based Speech Generation with Preference Alignment and Classifier Free Guidance](https://aclanthology.org/2025.emnlp-main.1076.pdf)
- **Dialogue summarization** (behaviors tasks)
  > Finally, a notable limitation is the persistence of hallucinations in the generation of item recommendation information and dialogue summaries, where the model fabricates features not present in the source content. (Limitations)
  - [Refining Text Generation for Realistic Conversational Recommendation via Direct Preference Optimization](https://aclanthology.org/2025.emnlp-main.1456.pdf)
- **Accuracy** (constructs)
  > accuracy: whether the responses contains any hallucination, and present correct attributes; (Section 4)
  - [MR. Judge: Multimodal Reasoner as a Judge](https://aclanthology.org/2025.emnlp-main.1021.pdf)
- **Retrieval-augmented generation** (behaviors tasks)
  > Retrieval-Augmented Generation (RAG) has emerged as a promising approach to address key limitations of Large Language Models (LLMs), such as hallucination, outdated knowledge, and lacking reference. (Abstract)
  - [InfoGain-RAG: Boosting Retrieval-Augmented Generation through Document Information Gain-based Reranking and Filtering](https://aclanthology.org/2025.emnlp-main.365.pdf)
- **Definition generation** (behaviors tasks)
  > In generating definitions, errors include gross hallucinations as in defining law as 'a system of rules created and enforced through social or governmental institutions to regulate behavior' in a context in which 'legal document setting forth rules governing a particular kind of activity' is the right sense (Section 4.2).
  - [Do Large Language Models Understand Word Senses?](https://aclanthology.org/2025.emnlp-main.1720.pdf)
- **Example generation** (behaviors tasks)
  > When prompting the model to generate new examples, we still find gross hallucinations (Section 4.2).
  - [Do Large Language Models Understand Word Senses?](https://aclanthology.org/2025.emnlp-main.1720.pdf)
- **Misinformation generation** (behaviors tasks)
  > We propose to categorize the LLM-based misinformation generation methods into three types based on real-world scenarios (Table 1): Hallucination Generation (HG) (Section 3)
  - [Can LLM-Generated Misinformation Be Detected?](https://proceedings.iclr.cc/paper_files/paper/2024/file/94bbcb744bbada8808fda05b9d9290d6-Paper-Conference.pdf)
- **Question answering** (behaviors tasks)
  > However, we also observed that autoregressive large language models like GPT-4o-mini tend to hallucinate responses... in answering questions within the privacy policy context.
  - [Empowering Users in Digital Privacy Management through Interactive LLM-Based Agents](https://proceedings.iclr.cc/paper_files/paper/2025/file/bef8e5620c699630405adafaa86cb038-Paper-Conference.pdf)
- **Conditional text generation** (behaviors tasks)
  > Large Language Models (LLMs), when used for conditional text generation, often produce hallucinations, i.e., information that is unfaithful or not grounded in the input context. (ABSTRACT)
  - [SCOPE: A Self-supervised Framework for Improving Faithfulness in Conditional Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/05d6b5b6901fb57d2c287e1d3ce6d63c-Paper-Conference.pdf)
- **Reasoning error** (behaviors tasks)
  > hallucinations are not limited to factual inaccuracies; they can also extend to faulty or incomplete reasoning, a significant concern for multi-step reasoning-based tasks (Creswell et al., 2022). (Section 2)
  - [Automatic Curriculum Expert Iteration for Reliable LLM Reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/9083c94382509473bdf5fc2672fc72b3-Paper-Conference.pdf)
- **Answer generation** (behaviors tasks)
  > In Answer Generation... answers containing the correct labels are of higher quality and suffer less from hallucination.
  - [Video-STaR: Self-Training Enables Video Instruction Tuning with Any Supervision](https://proceedings.iclr.cc/paper_files/paper/2025/file/e789cfc9389048df4a0a44d4086e0dc2-Paper-Conference.pdf)
- **MMMU** (measurements)
  > We also include self-reported MMMU (Yue et al., 2024) results to demonstrate their significant correlation with hallucination rates: the Pearson correlation between −log HT and MMMU score is 0.902 with a p-value of 3.45×10−4. (Table 2)
  - [TLDR: Token-Level Detective Reward Model for Large Vision Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/70217f4d06e57a2395f03b4bc136361a-Paper-Conference.pdf)
