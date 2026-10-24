# World knowledge
**Type:** Construct  
**Referenced in:** 92 papers  
**Also known as:** General knowledge, Real-world knowledge grounding, Background knowledge, Basic knowledge, World understanding, Prior knowledge, General world knowledge, World knowledge priors, Open-world knowledge, Background Knowledge, External knowledge  

## State of the Field

**Definition agreement:** Consensus. Most papers define world knowledge as a model's internalized store or latent capacity to recall and apply broad factual or conceptual information about the world, typically encoded in its parameters through pretraining and used when the needed information is not in the immediate input. A few papers narrow the content or setting to things like multimodal questions, social norms, object properties, or visual attributes, but they still treat the construct as the same underlying repository or use of pretrained world information rather than a different phenomenon.

**Space of definitions.** Across the papers, the prevailing usage treats world knowledge, often under labels like general knowledge, background knowledge, prior knowledge, or open-world knowledge, as broad factual and conceptual information internalized during pre-training and encoded in the model's weights or parameters, together with the capacity to recall and apply it. Many definitions stress a latent repository of facts, sometimes framed as parametric knowledge or a source of prior beliefs, and describe it as supporting question answering, reasoning, or evidence generation when the needed information is not in the immediate input. The main variation is whether papers treat it as stored knowledge in the model, as an ability to bring external facts to multimodal or missing-context tasks, or as something deeper, namely coherent world understanding beyond surface linguistic patterns. A smaller line narrows it further to specific content such as scientific intuition, social dynamics, object materials and physical properties, or memorized visual attribute associations.

**Space of facets.** Papers use several near-synonymous labels for neighboring notions, including general knowledge, background knowledge, prior knowledge, basic knowledge, and open-world knowledge. One framework uses Background Knowledge as the label and subdivides it into factuality and commonsense understanding. A few papers carve out narrower variants centered on memorized visual attribute associations, or contrast it with linguistic acuity by reserving a deeper world-understanding notion for coherent representations of concepts and their relations.

**Space of measurement.** Operationally, papers link world knowledge to 22 measurement instruments and 3 behavioral indicators. The most recurrent instruments are benchmark-based, especially MMLU, then TriviaQA and Natural Questions, with ARC-Easy and BIG-Bench Hard appearing less often; additional instruments bring the total to 22. These measures usually operationalize the construct through broad-domain question answering, multiple-choice accuracy, factual retrieval, or knowledge memorization, which aligns with the dominant definition as stored factual knowledge, although some papers use narrower task-specific evaluations for external knowledge or spoken factual domains.

**Links.** Papers connect world knowledge to 8 constructs and 3 behavioral indicators. The most frequently linked constructs are calibration, commonsense reasoning, factuality, generalization, and honesty: papers claim a causal relationship from world knowledge to calibration and generalization, and related links to commonsense reasoning, factuality, and honesty. Other recorded links add further causal claims from world knowledge to reasoning- and understanding-oriented outcomes and to a behavioral task, plus one causal relationship from a behavioral indicator back to world knowledge and other related links to question-answering settings.

## Sources

**[Democratizing Fine-grained Visual Recognition with Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/49299a8afda8053932a4cfd62fdfd1b9-Paper-Conference.pdf)**
> The body of general factual information about the world that a model has internalized from its training data.

**[Harnessing Explanations: LLM-to-LM Interpreter for Enhanced Text-Attributed Graph Representation Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/1766d75b077b66457040e4661771aec5-Paper-Conference.pdf) (as "General knowledge")**
> The broad base of factual and conceptual information acquired by a model during pre-training, which can be applied to downstream tasks.

**[Emu: Generative Pretraining in Multimodality](https://proceedings.iclr.cc/paper_files/paper/2024/file/34d5143080c89a7ce10932c8c5e1907f-Paper-Conference.pdf) (as "Real-world knowledge grounding")**
> The ability to connect multimodal inputs with factual, external knowledge about the world, enabling accurate and contextually relevant responses.

**[Symbolic Regression with a Learned Concept Library](https://proceedings.neurips.cc/paper_files/paper/2024/file/4ec3ddc465c6d650c9c419fb91f1c00a-Paper-Conference.pdf) (as "Background knowledge")**
> The latent store of general world knowledge and scientific intuition acquired during pre-training that the model can apply to new tasks.

**[Make-it-Real: Unleashing Large Multimodal Model for Painting 3D Objects with Realistic Materials](https://proceedings.neurips.cc/paper_files/paper/2024/file/b3b55c366d641c07180c40e4f978f311-Paper-Conference.pdf) (as "Prior knowledge")**
> The vast repository of general world knowledge, including facts about objects, their typical materials, and physical properties, that the model possesses from its training.

**[HFT: Half Fine-Tuning for Large Language Models](https://aclanthology.org/2025.acl-long.626.pdf) (as "Basic knowledge")**
> The parametric world knowledge learned during large-scale unsupervised pre-training, which is at risk of being forgotten during fine-tuning.

**[Position: Principles of Animal Cognition to Improve LLM Evaluations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/rane25a/rane25a.pdf) (as "World understanding")**
> The degree to which a model possesses an internal, coherent representation of concepts and their relationships in the world, beyond surface-level linguistic patterns.

**[SLlama: Parameter-Efficient Language Model Architecture for Enhanced Linguistic Competence Under Strict Data Constraints](https://aclanthology.org/2025.emnlp-main.1198.pdf) (as "General world knowledge")**
> The model's stored knowledge about facts and concepts from the world that can be applied in evaluation tasks.

**[Pixels Versus Priors: Controlling Knowledge Priors in Vision-Language Models through Visual Counterfacts](https://aclanthology.org/2025.emnlp-main.1262.pdf) (as "World knowledge priors")**
> Memorized linguistic associations about typical visual attributes of objects that the model can retrieve from pretraining rather than from the current image.

**[VDC: Versatile Data Cleanser based on Visual-Linguistic Inconsistency by Multimodal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/518046d86bbc41a0707727c38301ad8e-Paper-Conference.pdf) (as "Open-world knowledge")**
> The latent repository of general knowledge about the world that a model can draw upon to perform tasks that require information not present in the immediate input.

**[FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf) (as "Background Knowledge")**
> The capacity to generate responses by accessing a broad repository of general and domain-specific factual and commonsense information.

**[What matters when building vision-language models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf) (as "External knowledge")**
> The ability to answer questions that require information not present in the provided image or text, relying on internalized world knowledge.

## Relationships

### World knowledge →
- **MMLU** (measurements) — *measured_by*
  > we compare performance on SAD to general knowledge and reasoning abilities as measured by the MMLU benchmark (Hendrycks et al., 2021b). (Section 1).
  - [Me, Myself, and AI: The Situational Awareness Dataset (SAD) for LLMs](https://proceedings.neurips.cc/paper_files/paper/2024/file/7537726385a4a6f94321e3adf8bd827e-Paper-Datasets_and_Benchmarks_Track.pdf)
- **TriviaQA** (measurements) — *measured_by*
  > For general knowledge on facts, we report the performance on Natural Questions (0-shot) [40] and TriviaQA (0-shot) [41].
  - [BAM! Just Like That: Simple and Efficient Parameter Upcycling for Mixture of Experts](https://proceedings.neurips.cc/paper_files/paper/2024/file/665bb142d4b9f55660cb89bb56a66fe1-Paper-Conference.pdf)
- **Natural Questions** (measurements) — *measured_by*
  > World Knowledge (5-shot): NaturalQuestions (NQ, Kwiatkowski et al. (2019))... (Section 4.2).
  - [Megalodon: Efficient LLM Pretraining and Inference with Unlimited Context Length](https://proceedings.neurips.cc/paper_files/paper/2024/file/840abfadd04c967feaa2a49aba94a32d-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > World Knowledge (WK): Jeopardy-3-shots [3], ArcEasy-3-shots [13], ArcChallenge-3-shots [13], and WikiDataQA-3-shots [4]
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > BBH tasks cover a diverse range of reasoning problems spanning the following 4 categories according to their authors: 1) Algorithmic and Multi-Step Arithmetic Reasoning, 2) Natural Language Understanding, 3) Use of World Knowledge, and 4) Multilingual Knowledge and Reasoning.
  - [SELF-DISCOVER: Large Language Models Self-Compose Reasoning Structures](https://proceedings.neurips.cc/paper_files/paper/2024/file/e41efb03e20ca3c231940a3c6917ef6f-Paper-Conference.pdf)
- **WebQuestions** (measurements) — *measured_by*
  > The world knowledge is evaluated by the exact match scores (%) on TriviaQA [23], NQ open [29], and WebQS [4] (Section 4).
  - [CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf)
- **MMLU-Pro** (measurements) — *measured_by*
  > MMLU and MMLU Pro measure the general knowledge of LLMs
  - [Q-Adapter: Customizing Pre-trained LLMs to New Preferences with Forgetting Mitigation](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ebfb4ec1926fc6409df3bcf7ce957e8-Paper-Conference.pdf)
- **OK-VQA** (measurements) — *measured_by*
  > OKVQA (Marino et al., 2019) for external knowledge
  - [What matters when building vision-language models?](https://proceedings.neurips.cc/paper_files/paper/2024/file/a03037317560b8c5f2fb4b6466d4c439-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > World Knowledge (WK): Jeopardy-3-shots [3], ArcEasy-3-shots [13], ArcChallenge-3-shots [13], and WikiDataQA-3-shots [4]
  - [Dataset Decomposition: Faster LLM Training with Variable Sequence Length Curriculum](https://proceedings.neurips.cc/paper_files/paper/2024/file/3f9bf45ea04c98ad7cb857f951f499e2-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **RACE** (measurements) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > we evaluate the models from Figure 3 on five downstream tasks: ARC-easy, lambada, RACE, PIQA, and BoolQ, which collectively test for common sense reasoning, world knowledge, and reading comprehension. (Section 4.3)
  - [Sparse maximal update parameterization: A holistic approach to sparse training dynamics](https://proceedings.neurips.cc/paper_files/paper/2024/file/3b6aaffec941f98930753fa6d6de7263-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > Then, we evaluate each instruction-tuned model on a range of tasks to evaluate the model’s general/world knowledge (MMLU (Hendrycks et al., 2020), OpenBookQA (Mihaylov et al., 2018))
  - [Towards Scalable Exact Machine Unlearning Using Parameter-Efficient Fine-Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/d33b741600f100b31256c70a46f66ec9-Paper-Conference.pdf)
- **Generalization** (constructs) — *causes*
  > LLMs are pre-trained on massive datasets, allowing them to accumulate broad world knowledge that enhances their ability to generalize across a wide range of downstream tasks. (Section 2.2)
  - [FakeShield: Explainable Image Forgery Detection and Localization via Multi-modal Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4d4e0ab9d8ff180bf5b95c258842d16e-Paper-Conference.pdf)
- **HotpotQA** (measurements) — *measured_by*
  > World-knowledge tasks: TriviaQA (Joshi et al., 2017), Natural Questions (Kwiatkowski et al., 2019), HotpotQA (Yang et al., 2018), WebQuestions (Berant et al., 2013), ComplexWebQuestions (Talmor & Berant, 2018). (Section 5.1)
  - [Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf)
- **CWQ** (measurements) — *measured_by*
  > World-knowledge tasks: TriviaQA (Joshi et al., 2017), Natural Questions (Kwiatkowski et al., 2019), HotpotQA (Yang et al., 2018), WebQuestions (Berant et al., 2013), ComplexWebQuestions (Talmor & Berant, 2018). (Section 5.1)
  - [Mixture of Parrots: Experts improve memorization more than reasoning](https://proceedings.iclr.cc/paper_files/paper/2025/file/5bc3356e0fa1753fff7e8d6628e71b22-Paper-Conference.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > We measure general knowledge using the CommonsenseQA (CSQA) (Talmor et al., 2019) dataset... (Section 4.1)
  - [Progress or Regress? Self-Improvement Reversal in Post-training](https://proceedings.iclr.cc/paper_files/paper/2025/file/1fa0c4e5a7e189729230d018b229abc7-Paper-Conference.pdf)
- **Semantic understanding** (constructs) — *causes*
  > As LLMs encompass general open-world knowledge, they can be utilized for the semantic understanding of nodes’ textual content. (Section 1)
  - [Exploring the Potential of Large Language Models for Heterophilic Graphs](https://aclanthology.org/2025.naacl-long.269.pdf)
- **Calibration** (constructs) — *causes*
  > Our research reveals that LLMs’ prior knowledge causes potential poor calibration due to the ubiquitous presence of known data in real-world fine-tuning, which appears harmful for calibration. (Abstract)
  - [Towards Objective Fine-tuning: How LLMs' Prior Knowledge Causes Potential Poor Calibration?](https://aclanthology.org/2025.acl-long.722.pdf)
- **Overconfidence** (constructs) — *causes*
  > Specifically, data aligned with LLMs’ prior knowledge would induce overconfidence, while new knowledge improves calibration. (Abstract)
  - [Towards Objective Fine-tuning: How LLMs' Prior Knowledge Causes Potential Poor Calibration?](https://aclanthology.org/2025.acl-long.722.pdf)
- **Open LLM Leaderboard v2** (measurements) — *measured_by*
  > For instruction following and world knowledge, we utilize the recent HuggingFace OpenLLM Leaderboard 2 (Fourrier et al., 2024). (Section 3.1)
  - [WildChat-50M: A Deep Dive Into the Role of Synthetic Data in Post-Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feuer25a/feuer25a.pdf)
- **VoiceBench** (measurements) — *measured_by*
  > VoxEval (Cui et al., 2025) and VoiceBench serve as spoken counterparts to MMLU (Hendrycks et al., 2021) and MMLU-Pro (Wang et al., 2024), testing models across diverse factual domains like social science and humanities.
  - [Towards Holistic Evaluation of Large Audio-Language Models: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.514.pdf)
- **VoxEval** (measurements) — *measured_by*
  > VoxEval (Cui et al., 2025) and VoiceBench serve as spoken counterparts to MMLU (Hendrycks et al., 2021) and MMLU-Pro (Wang et al., 2024), testing models across diverse factual domains like social science and humanities.
  - [Towards Holistic Evaluation of Large Audio-Language Models: A Comprehensive Survey](https://aclanthology.org/2025.emnlp-main.514.pdf)
- **IFEval** (measurements) — *measured_by*
  > To validate the effectiveness and generalization capabilities of our approach, we assess model capabilities in general knowledge using IFEval (Zhou et al., 2023c) and MMLU (Hendrycks et al., 2021b) (Section 4.1)
  - [Middo: Model-Informed Dynamic Data Optimization for Enhanced LLM Fine-Tuning via Closed-Loop Learning](https://aclanthology.org/2025.emnlp-main.350.pdf)
- **SQuAD v1.1** (measurements) — *measured_by*
  > "general knowledge (TriviaQA [29] and SQuAD [62])"
  - [Kernel Language Entropy: Fine-grained Uncertainty Quantification for LLMs from Semantic Similarities](https://proceedings.neurips.cc/paper_files/paper/2024/file/10c456d2160517581a234dfde15a7505-Paper-Conference.pdf)

### → World knowledge
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > the fine-tuned model suffers from catastrophic forgetting of the pre-trained world knowledge
  - [CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf)

### Associated with
- **Factuality** (constructs)
  > We define 4 primary abilities which are divided into 12 fine-grained skills for comprehensive language model evaluation: ... Background Knowledge (Factuality, Commonsense Understanding)... (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs)
  > We define 4 primary abilities which are divided into 12 fine-grained skills for comprehensive language model evaluation: ... Background Knowledge (Factuality, Commonsense Understanding)... (Section 1)
  - [FLASK: Fine-grained Language Model Evaluation based on Alignment Skill Sets](https://proceedings.iclr.cc/paper_files/paper/2024/file/f41b4a6b202adcd8e150a9d4f124d8f6-Paper-Conference.pdf)
- **Question answering** (behaviors tasks)
  > the QA ability to maintain pre-trained world knowledge (Section 1).
  - [CorDA: Context-Oriented Decomposition Adaptation of Large Language Models for Task-Aware Parameter-Efficient Fine-tuning](https://proceedings.neurips.cc/paper_files/paper/2024/file/83f95bb0ac5046338ea2afe3390e9f4b-Paper-Conference.pdf)
- **Honesty** (constructs)
  > Model A is more honest than model B IFF it exhibits statistically superior performance on measures of world knowledge (Section 5).
  - [Style Outweighs Substance: Failure Modes of LLM Judges in Alignment Benchmarking](https://proceedings.iclr.cc/paper_files/paper/2025/file/1eb36d07ebb13be16ddbda679a95018b-Paper-Conference.pdf)
