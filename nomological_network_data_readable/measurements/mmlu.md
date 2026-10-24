# MMLU
**Type:** Measurement  
**Referenced in:** 694 papers  

## State of the Field

**What it is.** Across papers, the prevailing description is a broad multiple-choice benchmark, usually expanded as Massive Multitask Language Understanding, spanning 57 subjects across STEM, humanities, social sciences, and other academic or professional areas. Definitions variously call it a benchmark, dataset, test set, or quiz bank of exam-style questions, and one paper states that all questions are multiple choice with four options. Most descriptions say it covers 57 subjects, though papers differ on scale, citing 14,042 questions, 14,079 questions, about 16,000 questions, 14,421 problems, or 15,439 multiple-choice problems, and one paper instead describes general knowledge questions across 22 high-school subjects. A smaller line of work uses subject subsets, such as four subjects for distribution shift, legal-specific tasks, medical or scientific subsets, or slices like College Physics, College Chemistry, and Clinical Knowledge.

**What it is claimed to measure.** Across papers, the dominant framing is broad capability measurement rather than a single narrow construct. Papers link MMLU to 47 constructs and 21 behavioral indicators: the most common construct claims are general ability, reasoning, generalization, world knowledge, and knowledge, while the most common behavioral claims are multiple-choice question answering, language understanding task performance, question answering, instruction following, and catastrophic forgetting. Other papers also use it to measure commonsense reasoning, factual knowledge, calibration, domain knowledge, in-context learning, and many other targets, so the claims spread widely even though broad knowledge and reasoning framings are the prevailing usage.

**Space of uses.** In use, papers usually position MMLU as a general-purpose benchmark or as a control check that editing, alignment, pruning, fine-tuning, or other interventions do not reduce broader capability. It is commonly reported in zero-shot or few-shot settings, especially 5-shot, and some papers use direct prompting, chain-of-thought prompting, binary-choice conversions, or selected subject subsets. Papers link it to 8 other instruments: several report that MMLU is measured by lm-evaluation-harness, it is related to the Open LLM Leaderboard and FLASK, one paper reports that BABILong correlates with MMLU at shorter lengths, and another reports that MMLU is measured by HELM.

**Concerns raised.** Concerns raised around MMLU in these papers include training on the test task, benchmark overfitting or data contamination, and sensitivity to presentation, including output format bias, multiple-choice option symbol bias, and positional bias. Some work also studies updated MMLU versions or filtering methods for more reliable and timely evaluation.

## Sources

**[AlpaGasus: Training a Better Alpaca with Fewer Data](https://proceedings.iclr.cc/paper_files/paper/2024/file/9543942c237ded1b39b1fd37259ff88e-Paper-Conference.pdf)**
> A massive multitask benchmark, fully named Massive Multitask Language Understanding, consisting of multiple-choice questions covering 57 diverse subjects to measure world knowledge and problem-solving ability.

## Relationships

### → MMLU
- **General ability** (constructs) — *measured_by*
  > General Ability (Gen): We use MMLU [20], which consists of multiple-choice questions from various branches of knowledge. (Section 3.3.2)
  - [RWKU: Benchmarking Real-World Knowledge Unlearning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b1f78dfc9ca0156498241012aec4efa0-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > In the multiple-choice based datasets (ARC, RACE, HHH, MMLU), we consider the following approaches: (Section 3)
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > To demonstrate the effectiveness of SPA in the natural language understanding domain, we evaluate its performance on several diverse tasks, including Big-Bench Hard (BBH) (Suzgun et al., 2022), GPQA (Rein et al., 2023), MMLU (Hendrycks et al., 2020), and WinoGrande (Sakaguchi et al., 2019).
  - [Synthesize, Partition, then Adapt: Eliciting Diverse Samples from Foundation Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/6e2861dabad3fe21a71914ccfbfff976-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We select 24 datasets from MMLU (Hendrycks et al., 2021), Big-Bench-Hard (Suzgun et al., 2022), and MBPP (Austin et al., 2021) to evaluate the knowledge and reasoning abilities of LLMs in diverse domains. (p. 3)
  - [Bias Runs Deep: Implicit Reasoning Biases in Persona-Assigned LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/5e1a87dbb7e954b8d9d6c91f6db771eb-Paper-Conference.pdf)
- **World knowledge** (constructs) — *measured_by*
  > we compare performance on SAD to general knowledge and reasoning abilities as measured by the MMLU benchmark (Hendrycks et al., 2021b). (Section 1).
  - [Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/7537726385a4a6f94321e3adf8bd827e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Generalization** (constructs) — *measured_by*
  > On MMLU tasks (two rightmost plots in Fig. 4), IO even improves validation performance comparable to or better than EO, but the validation improvement does not generalize to the test set.
  - [Teach Better or Show Smarter? On Instructions and Exemplars in Automatic Prompt Optimization](https://proceedings.neurips.cc/paper_files/paper/2024/file/6b031defd145b02bed031093d8797bb3-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > we first fine-tune Llama 2-7B-chat on TruthfulQA and then evaluate 0-shot on three out-of-domain question-answering benchmarks: TriviaQA [18], Natural Questions [20, NQ], and MMLU [14]. (Section 6).
  - [LoFiT: Localized Fine-tuning on LLM Representations](https://proceedings.neurips.cc/paper_files/paper/2024/file/122ea6470232ee5e79a2649243348005-Paper-Conference.pdf)
- **Knowledge** (constructs) — *measured_by*
  > “the mostly knowledge-driven MMLU benchmark”
  - [MMLU-Pro: A More Robust and Challenging Multi-Task Language Understanding Benchmark](https://proceedings.neurips.cc/paper_files/paper/2024/file/ad236edc564f3e3156e1b2feafb99a24-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > The MMLU [31] can assess a model’s multi-task learning abilities across natural language inference, commonsense reasoning, question answering, etc. (Section 4.1)
  - [Instance-adaptive Zero-shot Chain-of-Thought Prompting](https://proceedings.neurips.cc/paper_files/paper/2024/file/e304e04a6f455dd82f8a85a0a3679493-Paper-Conference.pdf)
- **Factual knowledge** (constructs) — *measured_by*
  > Factual knowledge: We use the Massive Multitask Language Understanding dataset (MMLU (Hendrycks et al., 2021)) to assess the factual knowledge of LLMs and report 5-shot results. (Section 4.1)
  - [SelectIT: Selective Instruction Tuning for LLMs via Uncertainty-Aware Self-Reflection](https://proceedings.neurips.cc/paper_files/paper/2024/file/b130a5691815f550977e331f8bec08ae-Paper-Conference.pdf)
- **Knowledge reasoning** (constructs) — *measured_by*
  > “one knowledge-intensive reasoning benchmark: the mass-multitask language understanding (MMLU) dataset (Hendrycks et al., 2020).”
  - [BTR: Binary Token Representations for Efficient Retrieval Augmented Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/c0f721d329c1a10546869c783e866fb7-Paper-Conference.pdf)
- **Calibration** (constructs) — *measured_by*
  > Table 2 shows the performance of the posthoc calibrators on MMLU and BigBench datasets.
  - [QA-Calibration of Language Model Confidence Scores](https://proceedings.iclr.cc/paper_files/paper/2025/file/cd96cb9a239c37b39dbf34f3f5a4c56f-Paper-Conference.pdf)
- **Domain knowledge** (constructs) — *measured_by*
  > We measure this knowledge reservoir using the Massive Multitask Language Understanding dataset (MMLU) (Hendrycks et al., 2021). (Section 4.1)
  - [Seeking Neural Nuggets: Knowledge Transfer in Large Language Models from a Parametric Perspective](https://proceedings.iclr.cc/paper_files/paper/2024/file/6d6dc5c9ad19816d745535d352dc4295-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > evaluate the ICL capability of the finetuned models on two benchmarks: MMLU (Hendrycks et al., 2020) and BBH (Suzgun et al., 2022). (Section 5.3)
  - [CausalLM is not optimal for in-context learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/364071531ff2398e0fb8bae31f615b69-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > To evaluate models trained on C4, we use three metrics: perplexity on C4 validation, perplexity on WikiText-2 (Merity et al., 2016), and 5-shot MMLU accuracy (Hendrycks et al., 2021).
  - [LQ-LoRA: Low-rank plus Quantized Matrix Decomposition for Efficient Language Model Finetuning](https://proceedings.iclr.cc/paper_files/paper/2024/file/d97a16cb83d74195b76e0bf1e85bf072-Paper-Conference.pdf)
- **Short-context ability** (constructs) — *measured_by*
  > We select 8 short-context tasks commonly used for evaluating the general capabilities of models. These include MMLU... (Section 4.1)
  - [Make Your LLM Fully Utilize the Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/71c3451f6cd6a4f82bb822db25cea4fd-Paper-Conference.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > For evaluating utility, we consider MMLU (Hendrycks et al., 2020), GSM8K (Cobbe et al., 2021), and MBPP (Austin et al., 2021) datasets. (Section 3)
  - [Exploring Safety-Utility Trade-Offs in Personalized Language Models](https://aclanthology.org/2025.naacl-long.565.pdf)
- **Problem-solving ability** (constructs) — *measured_by*
  > MMLU (Hendrycks et al., 2021) Problem-solving across disciplines. (Table 2)
  - [Demystifying Small Language Models for Edge Deployment](https://aclanthology.org/2025.acl-long.718.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > we evaluate both the zero-shot and few-shot performance of the LLMs on Massively Multitask Language Understanding (MMLU) benchmark (Hendrycks et al., 2021). (Section 4.1)
  - [QA-LoRA: Quantization-Aware Low-Rank Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e6c2e85db1f1039177c4495ccd399ac4-Paper-Conference.pdf)
- **Task generalization** (constructs) — *measured_by*
  > we also evaluate multi-task generalization ability with five-shot setting (in-context learning) on MMLU (Hendrycks et al., 2020) (Section 4.1)
  - [Rethinking Channel Dimensions to Isolate Outliers for Low-bit Weight Quantization of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/374050dc3f211267bd6bf0ea24eae184-Paper-Conference.pdf)
- **Knowledge retention** (constructs) — *measured_by*
  > Besides, to verify whether HRA can better retain pre-training knowledge, we fine-tune LLaMA-2 7B on the MATHQA dataset by LoRA and HRA, respectively, and check the degradation of model performance on classic NLP tasks, including typical language tasks in ARC [55], HellaSwag [58], MMLU [17], Winogrande [42], and a coding task in HumanEval [6]. (Section 4.2)
  - [Bridging The Gap between Low-rank and Orthogonal Adaptation via Householder Reflection Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdd0640218a27e9e2c0e52e324e25db0-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > “To better illustrate the forgetting issue emerging in the fine-tuning process, we evaluate the MMLU score of different intermediate checkpoints”
  - [Q-Adapter: Customizing Pre-trained LLMs to New Preferences with Forgetting Mitigation](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ebfb4ec1926fc6409df3bcf7ce957e8-Paper-Conference.pdf)
- **Factual recall** (behaviors tasks) — *measured_by*
  > We track the progress of IFT based on the performance on four standard benchmarks: ... MMLU (Hendrycks et al., 2021) (general fact recall)... (Section 3.1)
  - [Context-Parametric Inversion: Why Instruction Finetuning May Not Actually Improve Context Reliance](https://proceedings.iclr.cc/paper_files/paper/2025/file/aa27ac7aca4e462da1439b43ceebc04c-Paper-Conference.pdf)
- **Instruction fine-tuning** (behaviors tasks) — *measured_by*
  > In this section, we compared the performance of MCNC and NOLA in parameter-efficient fine-tuning... Additionally, we report MMLU (Massively Multitask Language Understanding) (Hendrycks et al., 2021) 5-shot accuracy following the standard practice. (Section 4.2)
  - [MCNC: Manifold-Constrained Reparameterization for Neural Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f63d2963526bdd9ff1b8bcc2dc9905a-Paper-Conference.pdf)
- **Problem solving** (behaviors tasks) — *measured_by*
  > MMLU (Hendrycks et al., 2021) for evaluating Multi-task Problem Solving (Section 4.2)
  - [Automated Design of Agentic Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/36b7acf6f6010652b3f2a433774a66fe-Paper-Conference.pdf)
- **General reasoning** (constructs) — *measured_by*
  > Finally, to evaluate general reasoning, we test the model on two benchmarks: an easy task, 5-shot MMLU (Hendrycks et al., 2020)... (Section 2.3)
  - [Wasserstein Distances, Neuronal Entanglement, and Sparsity](https://proceedings.iclr.cc/paper_files/paper/2025/file/e1c1624dd7d9fa75adacd7e93c40e6b2-Paper-Conference.pdf)
- **Parametric knowledge** (constructs) — *measured_by*
  > MMLU primarily assesses a model’s parametric knowledge and requires minimal reasoning, thus offering limited benefits from CoT reasoning. (Section 4.3)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > For evaluation, we selected eight general-purpose benchmarks to assess context awareness, including MMLU (5-shot) (Hendrycks et al., 2020), MMLU-PRO (5-shot) (Wang et al., 2024), GPQA (0-shot) (Rein et al., 2023), BBH (3-shot) (Srivastava et al., 2023), WinoGrande (5-shot) (Sakaguchi et al., 2019), GSM8k (8-shot) (Cobbe et al., 2021), MATH (4-shot) (Lightman et al., 2023), and DROP (3-shot) (Dua et al., 2019). (Section 6)
  - [HoPE: A Novel Positional Encoding Without Long-Term Decay for Enhanced Context Awareness and Extrapolation](https://aclanthology.org/2025.acl-long.1123.pdf)
- **Multi-agent debate** (behaviors tasks) — *measured_by*
  > we build multi-agent debate tasks on several mathematical or logical reasoning datasets. ... We evaluate our approach on four datasets. ... (ii) MMLU (Hendrycks et al., 2021) is a multiple choice benchmark... (Section 4.2.1)
  - [Augmenting Multi-Agent Communication with State Delta Trajectory](https://aclanthology.org/2025.emnlp-main.518.pdf)
- **Language proficiency** (constructs) — *measured_by*
  > To validate that the detoxified representations of PaCE are still effective on general linguistic capability... we apply PaCE to detoxify MMLU questions... to show that the detoxification will not significantly degrade the LLM's reasoning capability.
  - [PaCE: Parsimonious Concept Engineering for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/b3cca813dcd78fe75e4d4df2e6a0b1a7-Paper-Conference.pdf)
- **Logical reasoning** (constructs) — *measured_by*
  > MMLU (Hendrycks et al., 2021) provides a comprehensive set of logical reasoning assessments across diverse subjects and difficulties, utilizing multiple-option questions to measure general world knowledge and logical inference capabilities.
  - [Scaling Large Language Model-based Multi-Agent Collaboration](https://proceedings.iclr.cc/paper_files/paper/2025/file/66a026c0d17040889b50f0dfa650e5e0-Paper-Conference.pdf)
- **Medical question answering** (behaviors tasks) — *measured_by*
  > For this evaluation, we use three medical QA datasets, including MMLU (Hendrycks et al., 2021), MedDDx (Su et al., 2024), and AfrimedQA (Olatunji et al., 2024).
  - [Multimodal Medical Code Tokenizer](https://raw.githubusercontent.com/mlresearch/v267/main/assets/su25b/su25b.pdf)
- **Human preference alignment** (constructs) — *measured_by*
  > for the VA task, we evaluate using MT-bench (Zheng et al., 2023) and MMLU (Hendrycks et al., 2020) (Section 4.1)
  - [EcoLoRA: Communication-Efficient Federated Fine-Tuning of Large Language Models](https://aclanthology.org/2025.emnlp-main.1046.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > We also assess the helpfulness of the targeted LLMs... To do this, we select 500 examples from three sources: ...MMLU (knowledge tests)... (Section 4.1)
  - [Refuse Whenever You Feel Unsafe: Improving Safety in LLMs via Decoupled Refusal Training](https://aclanthology.org/2025.acl-long.158.pdf)
- **STEM problem solving** (behaviors tasks) — *measured_by*
  > We evaluate MMLU and GSM8K for STEM tasks. (Section 3.1)
  - [Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/592da1445a51e54a3987958b5831948f-Paper-Conference.pdf)
- **Factuality** (constructs) — *measured_by*
  > We evaluate models on 11 different benchmarks, covering skills such as factuality (MMLU [20]) (Section 2.2).
  - [Unpacking DPO and PPO: Disentangling Best Practices for Learning from Preference Feedback](https://proceedings.neurips.cc/paper_files/paper/2024/file/404df2480b6eef0486a1679e371894b0-Paper-Conference.pdf)
- **Few-shot task performance** (behaviors tasks) — *measured_by*
  > We test the following: 5-shot MMLU [14] and 20-shot HellaSwag [61] benchmarks. (Section 6.1)
  - [SGLang: Efficient Execution of Structured Language Model Programs](https://proceedings.neurips.cc/paper_files/paper/2024/file/724be4472168f31ba1c9ac630f15dec8-Paper-Conference.pdf)
- **BABILong** (measurements) — *correlates*
  > At shorter lengths, BABILong exhibits a high correlation with MMLU, which diminishes as the length increases.
  - [BABILong: Testing the Limits of LLMs with Long Context Reasoning-in-a-Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/c0d62e70dbc659cc9bd44cbcf1cb652f-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Stability** (constructs) — *measured_by*
  > "Extensive experiments on updated MMLU and BIG-Bench demonstrate the stability of the proposed strategies"
  - [Automating Dataset Updates Towards Reliable and Timely Evaluation of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1e89c12621c0315373f20f0aeabe5dbe-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > In Table 2, we present the text classification results of different dataset pruning methods on the MMLU benchmark. (Section 4.2.2)
  - [Exploring Learning Complexity for Efficient Downstream Dataset Pruning](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7e4aab3786a1f8e39e0f9b8dd9fa105-Paper-Conference.pdf)
- **Complex reasoning question answering** (behaviors tasks) — *measured_by*
  > MMLU (Hendrycks et al., 2020) complex question answering dataset of multiple choice questions spanning many domains and is used to test LM question-answering across a wide range of subjects. (Section 3)
  - [Forking Paths in Neural Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/2b6a8ca3d06ffa2e044bff8c723863ff-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > For a fair comparison, we evaluate the models on MMLU (23), Arc Challenge (6), and OpenBookQA (35) zero-shot tasks implemented in Language Model Evaluation Harness (18).
  - [SLoPe: Double-Pruned Sparse Plus Lazy Low-Rank Adapter Pretraining of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3504a4fa45685d668ce92797fbbf1895-Paper-Conference.pdf)
- **Text generation quality** (constructs) — *measured_by*
  > For performance, we calculate the average response quality: ... where s(MRα(q)) represents an individual response quality score, such as correctness on golden-labeled datasets (e.g., MMLU) (Section 3.2)
  - [RouteLLM: Learning to Route LLMs from Preference Data](https://proceedings.iclr.cc/paper_files/paper/2025/file/5503a7c69d48a2f86fc00b3dc09de686-Paper-Conference.pdf)
- **Zero-shot question answering** (behaviors tasks) — *measured_by*
  > We evaluate quantized LLMs using ... zero-shot accuracy on the benchmarks ARC (Clark et al., 2018), LAMBADA (Paperno et al., 2016), MMLU (Hendrycks et al., 2020), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), and WinoGrande (Sakaguchi et al., 2021) (Section 4).
  - [LeanQuant: Accurate and Scalable Large Language Model Quantization with Loss-error-aware Grid](https://proceedings.iclr.cc/paper_files/paper/2025/file/57ccc284de6f060c8dcde8f9352f70a5-Paper-Conference.pdf)
- **Memorization** (constructs) — *measured_by*
  > Memorization was evaluated using a subset of the MMLU benchmark focused on factual knowledge domains
  - [Unveiling the Secret Recipe: A Guide For Supervised Fine-Tuning Small LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/b6e2c96bc4702f761d7d108d6e31930f-Paper-Conference.pdf)
- **Chain of thought** (behaviors tasks) — *measured_by*
  > To examine how retrieval heads effect reasoning tasks, we test Mistrial-7B-Instruct-v0.2 on MMLU (Hendrycks et al., 2020), MuSiQue and GSM8K (Cobbe et al., 2021), with and without chain-of-thought (CoT) reasoning. (Section 4.3)
  - [Retrieval Head Mechanistically Explains Long-Context Factuality](https://proceedings.iclr.cc/paper_files/paper/2025/file/9b77f07301b1ef1fe810aae96c12cb7b-Paper-Conference.pdf)
- **Multitask language understanding** (constructs) — *measured_by*
  > we evaluate unsupervised ICL on the GSM8K dataset that requires reasoning capabilities and on the MMLU(-Pro) dataset that covers broad knowledge of different disciplines. (Section 5.1)
  - [Large (Vision) Language Models are Unsupervised In-Context Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/3e887bf77d0ba6db38802e552a0d81d2-Paper-Conference.pdf)
- **Commonsense knowledge** (constructs) — *measured_by*
  > "Notably, TPO does not lead to performance degradation of LLMs on MMLU tasks, indicating that commonsense knowledge is preserved during the TPO fine-tuning process."
  - [TPO: Aligning Large Language Models with Multi-branch & Multi-step Preference Trees](https://proceedings.iclr.cc/paper_files/paper/2025/file/42ac0f53b7ffede90aea8275b11b3bb8-Paper-Conference.pdf)
- **Emergent abilities** (constructs) — *measured_by*
  > Fig. 1a–3a show the scaling trend of accuracy on the MMLU, Persian-QA, and arithmetic datasets, with clear ability emergence demonstrated.
  - [U-shaped and Inverted-U Scaling behind Emergent Abilities of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/f696200311b445af686c3ebd87ade1d7-Paper-Conference.pdf)
- **Knowledge-based question answering** (behaviors tasks) — *measured_by*
  > We first evaluated knowledge QA tasks that contain shorter context but require more challenging knowledge. Three subtopics of MMLU (Hendrycks et al., 2020) are considered (Section 4.1).
  - [Forest for the Trees: Overarching Prompting Evokes High-Level Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.66.pdf)
- **Positional bias** (constructs) — *measured_by*
  > Our experiments with the MMLU dataset (Hendrycks et al., 2020) show that set encoding offers a guaranteed and efficient way to remove positional bias without requiring multiple model runs or complex debiasing techniques. (Section 1)
  - [Positional Overload: Positional Debiasing and Context Window Extension for Large Language Models using Set Encoding](https://aclanthology.org/2025.acl-long.197.pdf)
- **Self-correction ability** (constructs) — *measured_by*
  > We evaluate self-correction capability on both classification and generation tasks, including domains in mathematics, coding, instruction following, common-sense reasoning, and knowledge. To be specific, the dataset we utilized include ... MMLU (Hendrycks et al., 2021)... (Section 4.1)
  - [Confidence v.s. Critique: A Decomposition of Self-Correction Capability for LLMs](https://aclanthology.org/2025.acl-long.203.pdf)
- **Iterative refinement** (behaviors tasks) — *measured_by*
  > In solution optimization, we assess performance on ... the Machine Learning and College Physics subsets of MMLU (Hendrycks et al., 2020)... (Section 4)
  - [Revolve: Optimizing AI Systems by Tracking Response Evolution in Textual Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25aj/zhang25aj.pdf)
- **Financial question answering** (behaviors tasks) — *measured_by*
  > Financial: MMLU benchmark (Hendrycks et al., 2020) (Section 4.1).
  - [Splitting with Importance-aware Updating for Heterogeneous Federated Learning with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/liao25c/liao25c.pdf)
- **Robustness** (constructs) — *measured_by*
  > The evaluation on MMLU shows the generalizability and robustness of our framework. (Abstract)
  - [Quamba2: A Robust and Scalable Post-training Quantization Framework for Selective State Space Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chiang25a/chiang25a.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > We evaluate the downstream task accuracy of models derived from the methodology outlined in §2.3 using the following datasets: ARC-Easy (Clark et al., 2018), ARC-Challenge (Clark et al., 2018), BoolQ (Clark et al., 2019), COPA (Roemmele et al., 2011), HellaSwag (Zellers et al., 2019), LAMBADA (Paperno et al., 2016), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2021), MMLU (Hendrycks et al., 2020), Jeopardy (Jeo, 2022), and Winograd (Levesque et al., 2012). (Section 3.1)
  - [Scaling Inference-Efficient Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bian25b/bian25b.pdf)
- **Benchmark overfitting** (constructs) — *measured_by*
  > We evaluate the impact of data contamination using a mix of seven different benchmarks: ARC-Easy (Clark et al., 2018), Social-I-QA (Sap et al., 2019), WinoGrande (Sakaguchi et al., 2021), PiQA (Bisk et al., 2020), BoolQ (Clark et al., 2019), MMLU (Hendrycks et al., 2021), and HellaSwag (Zellers et al., 2019). (Section 3.2)
  - [How Much Can We Forget about Data Contamination?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bordt25a/bordt25a.pdf)
- **Knowledge retrieval** (behaviors tasks) — *measured_by*
  > We consider a variety of tasks that cover both idealized cases where we know the task mechanisms and open-ended ones where only partial or approximate mechanisms are identified. These tasks fall into three categories: (2) knowledge retrieval tasks, including RAVEL (Huang et al., 2024) and MMLU (Hendrycks et al., 2021), whose mechanisms are only partially understood
  - [Internal Causal Mechanisms Robustly Predict Language Model Out-of-Distribution Behaviors](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25af/huang25af.pdf)
- **Multilingual reasoning** (constructs) — *measured_by*
  > Beyond English textual reasoning, we include two additional evaluation tracks: a multilingual experiment using MMLU and its professionally translated variant MMMLU (Hendrycks et al., 2021)...
  - [Sketch-of-Thought: Efficient LLM Reasoning with Adaptive Cognitive-Inspired Sketching](https://aclanthology.org/2025.emnlp-main.1236.pdf)
- **Editing locality** (constructs) — *measured_by*
  > For KE, we also need to consider locality, which ensures edits do not affect unrelated knowledge and abilities. To assess this, we evaluate the model on general benchmarks, including CommonsenseQA (Talmor et al., 2019), BigBench-Hard (Suzgun et al., 2023), MMLU (Hendrycks et al., 2021), and GSM8k (Cobbe et al., 2021) (Section 4.1).
  - [CaKE: Circuit-aware Editing Enables Generalizable Knowledge Learners](https://aclanthology.org/2025.emnlp-main.572.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > Table 2: Zero-shot performance on Language Model Evaluation Harness [56]... MMLU
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements)
  > We tested the benchmarks available on the hugging face open llm leaderboard which includes MMLU, ARC, Hellaswag, TruthfulQA, Winogrande and GSM8k (HuggingFaceH4) and only included open access models for which the scores are available on the leaderboard. (Section 2.6)
  - [PhyloLM: Inferring the Phylogeny of Large Language Models and Predicting their Performances in Benchmarks](https://proceedings.iclr.cc/paper_files/paper/2025/file/a2e28663712d5a3429a98918c3058f7b-Paper-Conference.pdf)
- **FLASK** (measurements)
  > We first collect input (instruction) and output (reference answer) pairs from various English NLP datasets, both multi-task datasets (e.g. MMLU (Hendrycks et al., 2020))... (Section 3.2)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **MR-Ben** (measurements)
  > Specifically, we sampled questions from mathematics, physics, biology, chemistry, and medicine from MMLU [27], which comprehensively assesses LLMs across academic and professional domains. (Section 3.1).
  - [MR-Ben: A Meta-Reasoning Benchmark for Evaluating System-2 Thinking in LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/d81cb1f4dc6e13aeb45553f80b3d6837-Paper-Conference.pdf)
- **Open LLM Leaderboard V1** (measurements)
  > “These two benchmarks are arguably the most influential of the 2022-2024 period under study. They are also included in the Hugging-Face (HF) Open LLM Leaderboard v1”
  - [Training on the Test Task Confounds Evaluation and Emergence](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab8c971c2ccd12bac0ab249f75e2c16d-Paper-Conference.pdf)
- **HELM** (measurements)
  > "the performance of the ten best-performing LLMs on MMLU (as ranked by HELM (Liang et al., 2023))"
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
- **OLMES** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): MMLU ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **Context retrieval** (behaviors tasks)
  > we find that MMLU performance is primarily governed by retrieval ability (Section 7).
  - [Understanding the Skill Gap in Recurrent Language Models: The Role of the Gather-and-Aggregate Mechanism](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bick25a/bick25a.pdf)
