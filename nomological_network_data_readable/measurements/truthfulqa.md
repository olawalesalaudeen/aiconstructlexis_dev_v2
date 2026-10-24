# TruthfulQA
**Type:** Measurement  
**Referenced in:** 233 papers  
**Also known as:** Truthful QA, Truthful-QA, TRUTHFULQA  

## State of the Field

**What it is.** Across papers, TruthfulQA is most commonly described as a question answering benchmark built to elicit false answers based on common misconceptions and to test whether models produce truthful or factually accurate responses instead. Definitions usually describe over 800 questions, often specified as 817 questions across 38 categories, though one paper refers to 818 questions and another to 811 testing problems; categories named in one description include health, law, finance, and politics. Papers differ on format: some describe only multiple-choice questions, including MC1 or MC2, while others state that it has both multiple-choice question answering and generation protocols, and a few use its generation portion for open-ended or long-form responses.

**What it is claimed to measure.** Across papers, the dominant use is to measure truthfulness, with authors saying it "tests an LLM's truthfulness" or measures a model's "propensity to reproduce falsehoods." Papers link it to 19 constructs and 11 behavioral indicators. The most recurring claims cluster around truthfulness and factuality, and papers also use it for hallucination, question answering, and text generation; beyond these recurring uses, the reported targets spread across many other constructs and behaviors rather than converging on a single exclusive one.

**Space of uses.** Most papers use TruthfulQA as a standard evaluation benchmark, often in zero-shot or few-shot settings rather than as a standalone data resource. The only linked instrument is Open LLM Leaderboard, and papers repeatedly place TruthfulQA alongside MMLU, ARC, HellaSwag, and GSM8K in broader evaluation suites. Within those evaluations, some authors treat it as a dedicated truthfulness check, while others use MC1 or MC2 multiple-choice scoring or the generation portion for sentence-level, open-ended, or long-form outputs.

**Concerns raised.** A smaller line of work notes limits on what TruthfulQA captures. One paper says that benchmarks such as TruthfulQA mostly consist of prompts that test knowledge of a single factoid, and another reports that TruthfulQA MC1 variance is strongly correlated with general capabilities when discussing whether safety benchmarks measure safety progress.

## Sources

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf)**
> Benchmark containing over 800 questions designed to elicit false answers based on common misconceptions, evaluating a model's ability to avoid generating false information.

**[Transformer Block Coupling and its Correlation with Generalization in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3f7f788b479a26348605a9f97c465d22-Paper-Conference.pdf) (as "Truthful QA")**
> A benchmark designed to measure a model's ability to generate truthful answers and avoid generating common falsehoods.

**[Weak-to-Strong Preference Optimization: Stealing Reward from Weak Aligned Model](https://proceedings.iclr.cc/paper_files/paper/2025/file/5beb3a846137dd6524f2da17c97d9426-Paper-Conference.pdf) (as "Truthful-QA")**
> The Truthful-QA benchmark, designed to measure a model's tendency to generate truthful answers and avoid generating common falsehoods.

**[CultureInstruct: Curating Multi-Cultural Instructions at Scale](https://aclanthology.org/2025.naacl-long.465.pdf) (as "TRUTHFULQA")**
> Benchmark designed to evaluate factual accuracy and truthfulness in AI-generated responses across multiple-choice and generative tasks.

## Relationships

### → TruthfulQA
- **Truthfulness** (constructs) — *measured_by*
  > The dataset evaluates a model’s ability to not generate false answers learnt from imitation learning on text. (Section 3)
  - [The Consensus Game: Language Model Generation via Equilibrium Search](https://proceedings.iclr.cc/paper_files/paper/2024/file/17a9bfda8be2301e24f232fb32f1e0fa-Paper-Conference.pdf)
- **Factuality** (constructs) — *measured_by*
  > For multiple choices, we use TruthfulQA (Lin et al., 2022) and FACTOR (News/Wiki) (Muhlgay et al., 2023) to assess LMs’ factuality in short-answer/long-paragraph settings, respectively.
  - [DoLa: Decoding by Contrasting Layers Improves Factuality in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/edc36117f795ca52a0cbf6a7b3882859-Paper-Conference.pdf)
- **Text generation** (behaviors tasks) — *measured_by*
  > For open-ended generation tasks, we adopt TruthfulQA [29] and tasks involving chain-of-thought reasoning [52]: StrategyQA [12] and GSM8K [8]. (Section 3.1)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *measured_by*
  > Building upon previous studies [62, 22], we utilized the TrustfulQA benchmark [26] for evaluating the tendency of models to produce hallucinations (Section 5.2)
  - [Adversarial Representation Engineering: A General Model Editing Framework for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/e4630f7c0660d944c132455c124e7d90-Paper-Conference.pdf)
- **Safety** (constructs) — *measured_by*
  > Safety and Helpfulness comprises TruthfulQA [38], ToxiGen [21], and Hendrycks Ethics [23]. (Section 4.1)
  - [Instruction Tuning With Loss Over Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/7ffb43adf37b3eeaba559098bc084cc6-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > TruthfulQA encompasses multiple-choice questions, with only one option being the best answer. (Section 4.1)
  - [On the Humanity of Conversational AI: Evaluating the Psychological Portrayal of LLMs](https://proceedings.iclr.cc/paper_files/paper/2024/file/c48dcd605cfb17d5b4f94ce106a915f7-Paper-Conference.pdf)
- **Commonsense reasoning** (constructs) — *measured_by*
  > several question-answering datasets for common-sense reasoning: Arc-C [10], HellaSwag [56], TruthfulQA [29] and WinoGrande [45]
  - [Compact Language Models via Pruning and Knowledge Distillation](https://proceedings.neurips.cc/paper_files/paper/2024/file/4822991365c962105b1b95b1107d30e5-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For multiple-choice question tasks, we use the TruthfulQA [29] and FACTOR (Wiki) [33] datasets to assess the LLMs’ factuality (Section 3.1)
  - [SLED: Self Logits Evolution Decoding for Improving Factuality in Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/0939f13ffce3ff487509d902ddba4571-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > To investigate whether up-weighting context-aware neurons impairs the model’s general abilities, we conducted evaluations of IRCAN on six widely-used benchmarks... including ARC [6], HellaSwag [47], MMLU [15], Winogrande [34], GSM8K [7], and TruthfulQA [24]. (Section 5.4)
  - [IRCAN: Mitigating Knowledge Conflicts in LLM Generation via Identifying and Reweighting Context-Aware Neurons](https://proceedings.neurips.cc/paper_files/paper/2024/file/08a9e28c96d016dd63903ab51cd085b0-Paper-Conference.pdf)
- **Reliability** (constructs) — *measured_by*
  > we use TruthfulQA [27] to measure the reliability of the outputs generated by Aligner in terms of factualness and common sense. (Section 3.2)
  - [Aligner: Efficient Alignment by Learning to Correct](https://proceedings.neurips.cc/paper_files/paper/2024/file/a51a74b2d71387dc71cc29181b5519bb-Paper-Conference.pdf)
- **Long-form question answering** (behaviors tasks) — *measured_by*
  > one Long-form Question Answering dataset, TruthfulQA [50], that requires the generation of long-form and truthful responses. (Section 4.1).
  - [xRAG: Extreme Context Compression for Retrieval-augmented Generation with One Token](https://proceedings.neurips.cc/paper_files/paper/2024/file/c5cf13bfd3762821ef7607e63ee90075-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > For standard contexts, we utilize generation tasks from LM-Eval (Gao et al., 2021), assessing model performance across commonsense and math reasoning on CoQA (Exact Match (EM) Accuracy) (Reddy et al., 2019), TruthfulQA (BLEU score) (Lin et al., 2022), and GSM8K (Exact Match (EM) Accuracy) Cobbe et al. (2021b). (Section 5.1)
  - [$\text{D}_{2}\text{O}$: Dynamic Discriminative Operations for Efficient Long-Context Inference of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/d862f7f5445255090de13b825b880d59-Paper-Conference.pdf)
- **Informativeness** (constructs) — *measured_by*
  > TruthfulQA (Lin et al., 2022) is perhaps the most popular benchmark to evaluate truthfulness in LLMs, a benchmark to assess the truthfulness and informativeness of LLMs by focusing on imitative falsehoods. (Section 1)
  - [Truth Knows No Language: Evaluating Truthfulness Beyond English](https://aclanthology.org/2025.acl-long.1507.pdf)
- **Commonsense knowledge** (constructs) — *measured_by*
  > we use TruthfulQA [27] to measure the reliability of the outputs generated by Aligner in terms of factualness and common sense. (Section 3.2)
  - [Aligner: Efficient Alignment by Learning to Correct](https://proceedings.neurips.cc/paper_files/paper/2024/file/a51a74b2d71387dc71cc29181b5519bb-Paper-Conference.pdf)
- **Fact checking** (behaviors tasks) — *measured_by*
  > We evaluate a biography-generation task (Min et al., 2023) and TruthfulQA (Lin et al., 2022) which is a benchmark for testing false beliefs or misconceptions. (Section 4.1, Fact verification)
  - [Nearest Neighbor Speculative Decoding for LLM Generation and Attribution](https://proceedings.neurips.cc/paper_files/paper/2024/file/93c099bb4cde51b724eaa6d6d4a4b5e4-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > ...we select TruthfulQA (Lin et al., 2022) and SafetyBench (Zhang et al., 2023) as the evaluation datasets, which measure helpfulness and safety, respectively. (Section 4.1)
  - [Delta-CoMe: Training-Free Delta-Compression with Mixed-Precision for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/37664246a1e07e212ddacea6e5a523f2-Paper-Conference.pdf)
- **Toxicity** (constructs) — *measured_by*
  > We evaluate the Spectra suite across various safety and toxicity benchmarks of TruthfulQA (Lin et al., 2021), Big Bench BBQ Lite (Parrish et al., 2022) and CrowsPairs (Nangia et al., 2020). (Section 5)
  - [Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf)
- **Generative ability** (constructs) — *measured_by*
  > the results on two generation datasets (TruthfulQA, GSM8K) of all three baselines when compression ratios are 60% and above are zero, meaning that the compressed LLMs totally lose their generation ability. (Section 4.1)
  - [SVD-LLM: Truncation-aware Singular Value Decomposition for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/3104e1ab39875cf54fe1eb4473e7c5a1-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **Knowledge transfer** (constructs) — *measured_by*
  > Bulilding on this success we further extended DAMO to LLMs, where is also delivered strong results on benchmarks such as TruthfulQA Lin et al. (2021), FACTOR Muhlgay et al. (2023), and GSM8K Cobbe et al. (2021), indicating that DAMO possesses notable transferability across different tasks and model types. (Section 1)
  - [DAMO: Decoding by Accumulating Activations Momentum for Mitigating Hallucinations in Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/8f0f23417ce1d00212a7c85c2560c392-Paper-Conference.pdf)
- **AI-generated text detection** (behaviors tasks) — *measured_by*
  > "Here, we use the learned kernel function from HC3 to test texts from TQA to mimic MGT-detection when HWTs are from unseen distributions."
  - [Deep Kernel Relative Test for Machine-generated Text Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/e124f1547f7ac87e33d348b827d4291b-Paper-Conference.pdf)
- **Factual question answering** (behaviors tasks) — *measured_by*
  > The TruthfulQA dataset (Lin et al., 2021a) assesses the model’s capability in providing factual responses. (Section 2.3)
  - [Extracting and Understanding the Superficial Knowledge in Alignment](https://aclanthology.org/2025.naacl-long.168.pdf)
- **Knowledge understanding** (constructs) — *measured_by*
  > We use Open LLM Leaderboard 2 (Fourrier et al., 2024), and TruthfulQA (Lin et al., 2021) for the evaluation. (Section 3.2, under the heading 'Knowledge & Understanding')
  - [ATLANTIS: Weak-to-Strong Learning via Importance Sampling](https://aclanthology.org/2025.acl-long.52.pdf)
- **Hallucination detection** (behaviors tasks) — *measured_by*
  > On the challenging TruthfulQA benchmark (Lin et al., 2022a), our approach achieves a significant +12.8% improvement in hallucination detection accuracy (AUROC) compared to state-of-the-art methods. (Section 1. Introduction)
  - [Steer LLM Latents for Hallucination Detection](https://raw.githubusercontent.com/mlresearch/v267/main/assets/park25a/park25a.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > to demonstrate contextual understanding and general effectiveness of each model variant, we assess their performance using HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2020), and TruthfulQA (Lin et al., 2021b) benchmarks.
  - [QoS-Efficient Serving of Multiple Mixture-of-Expert LLMs Using Partial Runtime Reconfiguration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/imani25a/imani25a.pdf)
- **Honesty** (constructs) — *measured_by*
  > For honesty, we utilize the TruthfulQA dataset (Lin et al., 2021) (Section 4.1).
  - [Too Helpful, Too Harmless, Too Honest or Just Right?](https://aclanthology.org/2025.emnlp-main.1510.pdf)
- **Factual reasoning** (constructs) — *measured_by*
  > we evaluate the proposed TOW on ... TruthfulQA (Lin et al., 2022) and HaluEval (Li et al., 2023) for factual reasoning
  - [ToW: Thoughts of Words Improve Reasoning in Large Language Models](https://aclanthology.org/2025.naacl-long.157.pdf)

### Associated with
- **Open LLM Leaderboard** (measurements)
  > We evaluate these LLMs using prompts of varying length, ambiguity, and context, sourced from the test set of ARC (Clark et al., 2018), GSM8K (Cobbe et al., 2021), HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021), Truthful QA (Lin et al., 2022), and Winogrande (Sakaguchi et al., 2019). These set the performance benchmarks on the HuggingFace Open LLM Leaderboard (Section 4.2)
  - [Transformer Block Coupling and its Correlation with Generalization in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3f7f788b479a26348605a9f97c465d22-Paper-Conference.pdf)
