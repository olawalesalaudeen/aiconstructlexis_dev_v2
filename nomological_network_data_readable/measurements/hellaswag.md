# HellaSwag
**Type:** Measurement  
**Referenced in:** 401 papers  
**Also known as:** Hellaswag, HellaSWAG, HELLASWAG, H-SWAG  

## State of the Field

**What it is.** Across the surveyed papers, HellaSwag is most commonly described as a benchmark or dataset for commonsense natural language inference, commonsense reasoning, or sentence and context completion. The prevailing format is multiple-choice selection of the most plausible ending or continuation for a sentence, text snippet, event, or everyday scenario, often from four options. A smaller set of definitions instead emphasize grounded or physically situated commonsense, next-event prediction, or text completion with adversarially filtered or generated alternatives.

**What it is claimed to measure.** Papers link HellaSwag to 17 constructs and 17 behavioral indicators, so the measurement claims spread across many targets. The dominant use is as a measure of Commonsense reasoning and broader Reasoning, with smaller but recurring uses for General ability, Generalization, and Natural language understanding. Some papers simply call it a test of commonsense inference, while another says it aims to measure a model's ability to understand language; at the behavioral level, the most common links are to language understanding task performance and zero-shot task performance.

**Space of uses.** Papers link it to 4 other instruments. It is most commonly reported as being measured by lm-evaluation-harness, with smaller numbers of papers saying it is measured by OLMES and OpenCompass, and papers also relate it to the Open LLM Leaderboard. In practice it is repeatedly used alongside PIQA and other reasoning benchmarks, most often as a zero-shot accuracy check, though some papers use 10-shot or 20-shot settings, treat it as a short-context or out-of-distribution test, or run it as open-ended completion without answer choices.

**Concerns raised.** Explicit concerns are limited but present. One paper uses HellaSwag in an evaluation of data contamination and benchmark overfitting, another creates noised versions of HellaSwag for robustness testing, and a few definitions describe adversarially filtered or adversarially generated answer choices, with one paper saying the examples are difficult for language models but easy for humans.

## Sources

**[AffineQuant: Affine Transformation Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/ddfb58b61e7213dfb9e06c695475b2bd-Paper-Conference.pdf)**
> A zero-shot benchmark for commonsense completion and multiple-choice selection.

**[Plug-and-Play: An Efficient Post-training Pruning Method for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/db6ccc979860d7a233ecaf588bb23512-Paper-Conference.pdf) (as "Hellaswag")**
> Zero-shot evaluation benchmark assessing commonsense reasoning in language models.

**[Surprising Effectiveness of pretraining Ternary  Language Model at Scale](https://proceedings.iclr.cc/paper_files/paper/2025/file/6499f26637f74f7c0fbfb46668434973-Paper-Conference.pdf) (as "HellaSWAG")**
> A benchmark for commonsense natural language inference that challenges models to choose the most plausible ending for a given text snippet.

**[Goal-Conditioned DPO: Prioritizing Safety in Misaligned Instructions](https://aclanthology.org/2025.naacl-long.369.pdf) (as "HELLASWAG")**
> Benchmark that measures a model’s ability to generate natural continuations by selecting the most plausible ending from candidate sentences.

**[Superpose Task-specific Features for Model Merging](https://aclanthology.org/2025.emnlp-main.210.pdf) (as "H-SWAG")**
> HellaSwag, a benchmark for commonsense natural language inference framed as a sentence completion task, used here to test out-of-distribution generalization.

## Relationships

### → HellaSwag
- **Commonsense reasoning** (constructs) — *measured_by*
  > We further assess the zero-shot common sense reasoning ability on tasks covering HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), WinoGrande (Sakaguchi et al., 2019), ARC (Clark et al., 2018), BoolQ (Clark et al., 2019), and OpenBookQA (Mihaylov et al., 2018). (Section 4.1)
  - [QA-LoRA: Quantization-Aware Low-Rank Adaptation of Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/e6c2e85db1f1039177c4495ccd399ac4-Paper-Conference.pdf)
- **Reasoning** (constructs) — *measured_by*
  > We evaluate the reasoning performance of quantized models using zero-shot tasks (e.g., ARC [4], HellaSwag [34], and MMLU [8]). (Section 4.2)
  - [Towards Next-Level Post-Training Quantization of Hyper-Scale Transformers](https://proceedings.neurips.cc/paper_files/paper/2024/file/ab6eba9a853087993addff937c8cec87-Paper-Conference.pdf)
- **Natural language understanding** (constructs) — *measured_by*
  > A diverse set of benchmarks containing Piqa (Bisk et al., 2019), ARC-c, ARC-e (Clark et al., 2018), Hellaswag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021) and Winogrande (Sakaguchi et al., 2019), which collectively evaluate the language comprehension and reasoning faculties of LLMs. (Section 5.1)
  - [TODO: Enhancing LLM Alignment with Ternary Preferences](https://proceedings.iclr.cc/paper_files/paper/2025/file/fef5607a9b826f1845533f923e308435-Paper-Conference.pdf)
- **General ability** (constructs) — *measured_by*
  > To investigate whether up-weighting context-aware neurons impairs the model’s general abilities, we conducted evaluations of IRCAN on six widely-used benchmarks... including ARC [6], HellaSwag [47], MMLU [15], Winogrande [34], GSM8K [7], and TruthfulQA [24]. (Section 5.4)
  - [IRCAN: Mitigating Knowledge Conflicts in LLM Generation via Identifying and Reweighting Context-Aware Neurons](https://proceedings.neurips.cc/paper_files/paper/2024/file/08a9e28c96d016dd63903ab51cd085b0-Paper-Conference.pdf)
- **Sentence completion** (behaviors tasks) — *measured_by*
  > Hellaswag: Can a machine really finish your sentence? (Section References [46])
  - [Mixture of Tokens: Continuous MoE through Cross-Example Aggregation](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc427eb348789b190e3ea050cceff8a3-Paper-Conference.pdf)
- **Zero-shot task performance** (behaviors tasks) — *measured_by*
  > Secondly, we measure zero-shot accuracy on five tasks: WinoGrande (Sakaguchi et al., 2021), PiQA (Tata & Patel, 2003), HellaSwag, ARC-easy and ARC-challenge (Clark et al., 2018). (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We experiment on two challenging real-world multiple-choice datasets from LLM benchmarks: HellaSwag (Zellers et al., 2019) and MMLU (Hendrycks et al., 2021). (Section 3.2).
  - [Answer, Assemble, Ace: Understanding How LMs Answer Multiple Choice Questions](https://proceedings.iclr.cc/paper_files/paper/2025/file/c248154176c08147e82c0b30961604f7-Paper-Conference.pdf)
- **Zero-shot question answering** (behaviors tasks) — *measured_by*
  > “accuracies of zero-shot tasks including Winogrande [29], HellaSwag [41], PIQA [4], BoolQ [7], and ARC [8] are also reported.”
  - [OneBit: Towards Extremely Low-bit Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a7a3f53faafc0161be0fcb57e5fa078-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > To test generalization (Section 4.4), we additionally evaluate on MATH (4-shot) (Hendrycks et al., 2021b), MBPP (3-shot) (Austin et al., 2021), NaturalQuestions (5-shot) (Kwiatkowski et al., 2019), TriviaQA (5-shot) (Joshi et al., 2017), Hellaswag (0-shot) (Zellers et al., 2019), PIQA (0-shot) (Bisk et al., 2020), and TruthfulQA (0-shot) (Lin et al., 2022).
  - [Self-MoE: Towards Compositional Large Language Models with Self-Specialized Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/558a100caa93422df215fadb9e9b1dd7-Paper-Conference.pdf)
- **Natural language inference** (behaviors tasks) — *measured_by*
  > (e) natural language inference (HellaSwag (Zellers et al., 2019)) (Section 4.2)
  - [Think before you speak: Training Language Models With Pause Tokens](https://proceedings.iclr.cc/paper_files/paper/2024/file/76917808731dae9e6d62c2a7a6afb542-Paper-Conference.pdf)
- **Few-shot task performance** (behaviors tasks) — *measured_by*
  > We test the following: 5-shot MMLU [14] and 20-shot HellaSwag [61] benchmarks. (Section 6.1)
  - [SGLang: Efficient Execution of Structured Language Model Programs](https://proceedings.neurips.cc/paper_files/paper/2024/file/724be4472168f31ba1c9ac630f15dec8-Paper-Conference.pdf)
- **Short-context ability** (constructs) — *measured_by*
  > We select 8 short-context tasks commonly used for evaluating the general capabilities of models. These include... HellaSwag... (Section 4.1)
  - [Make Your LLM Fully Utilize the Context](https://proceedings.neurips.cc/paper_files/paper/2024/file/71c3451f6cd6a4f82bb822db25cea4fd-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > Figure 3: Models trained with 4k context length. Final performance (y-axis) on a set of downstream tasks... hellaswag
  - [nGPT: Normalized Transformer with Representation Learning on the Hypersphere](https://proceedings.iclr.cc/paper_files/paper/2025/file/b7c12689a89e98a61bcaa65285a41b7c-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > To validate the performance of different models, we used some benchmarks for the 3B and 19B models that were trained more tokens, including Lambada(Paperno et al., 2016), Winogrande(Sakaguchi et al., 2021), Hellaswag(Zellers et al., 2019), ARC(Clark et al., 2018), CMMLU(Li et al., 2023a), MMLU(Hendrycks et al.), Math(Hendrycks et al., 2021). (Section 4.1)
  - [KV Shifting Attention Enhances Language Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25ac/xu25ac.pdf)
- **Language understanding task performance** (behaviors tasks) — *measured_by*
  > Table 1 presents a comprehensive breakdown of downstream evaluation results for our models and multiple baselines on a standard set of commonsense reasoning and language understanding tasks: WinoGrande [33], HellaSwag [45], PIQA [2], ARC-Challenge and ARC-Easy [6], and LAMBADA [29] (Section 5).
  - [Transformers to SSMs: Distilling Quadratic Knowledge to Subquadratic Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/3848fef259495bfd04d60cdc5c1b4db7-Paper-Conference.pdf)
- **In-context learning** (constructs) — *measured_by*
  > IP = 1 N g PN g j=1 ˆa T e j N , which is the average in-context performance on N g general evaluation tasks... We set N g = 4 general evaluation tasks, covering Hellaswag (Zellers et al., 2019), CommonsenseQA (Talmor et al., 2018), Alpaca (Hendrycks et al., 2020), and BBH-Object-Count (Srivastava et al., 2022) (Section 3)
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **Machine reading comprehension** (behaviors tasks) — *measured_by*
  > For common sense and reading comprehension tasks, we report 0-shot accuracy results for SciQ [22], PIQA [23], WinoGrande (Wino.) [24], ARC Easy(ARC-E.) [25], and HellaSwag (HellaS.) [26], alongside 25-shot accuracy for ARC Challenge (ARC-C.) [27]. (Section 5.1)
  - [DHA: Learning Decoupled-Head Attention from Transformer Checkpoints via Adaptive Heads Fusion](https://proceedings.neurips.cc/paper_files/paper/2024/file/518a75257f37b32f711082dff33c2ffc-Paper-Conference.pdf)
- **Knowledge retention** (constructs) — *measured_by*
  > Besides, to verify whether HRA can better retain pre-training knowledge, we fine-tune LLaMA-2 7B on the MATHQA dataset by LoRA and HRA, respectively, and check the degradation of model performance on classic NLP tasks, including typical language tasks in ARC [55], HellaSwag [58], MMLU [17], Winogrande [42], and a coding task in HumanEval [6]. (Section 4.2)
  - [Bridging The Gap between Low-rank and Orthogonal Adaptation via Householder Reflection Adaptation](https://proceedings.neurips.cc/paper_files/paper/2024/file/cdd0640218a27e9e2c0e52e324e25db0-Paper-Conference.pdf)
- **Zero-shot classification** (behaviors tasks) — *measured_by*
  > We also compare the zero-shot accuracy on common reasoning zero-shot classiﬁcation datasets including BoolQ [50], PIQA [51], HellaSwag [52], WinoGrande [53], ARC-easy [54], ARC-challenge [54], and OpenbookQA [55]. (Section 4.1)
  - [Search for Efficient Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/fb64a43508e0cfe53ee6179ff31ea900-Paper-Conference.pdf)
- **Language model pre-training** (behaviors tasks) — *measured_by*
  > For LLM pertaining, we report the perplexity on Wikitext 103..., and the accuracy on COPA (Gordon et al., 2012), ARC (Clark et al., 2018), SciQ (Welbl et al., 2017), and HellaSwag (Zellers et al., 2019). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *measured_by*
  > Specifically, we calculate prediction accuracies on the following three benchmarks: (1) HellaSwag (Zellers et al., 2019): inference the most plausible continuation for daily events (70K problems); (2) WinoGrande (Sakaguchi et al., 2019): assesses commonsense reasoning (44K problems); (3) ARC-Challenge (Clark et al., 2018): complex reasoning and understanding of scientific concepts (7.8K problems)... to investigate the extent of forgetting
  - [RaSA: Rank-Sharing Low-Rank Adaptation](https://proceedings.iclr.cc/paper_files/paper/2025/file/b4fd162d3e2d015233486a2e313828a7-Paper-Conference.pdf)
- **Classification** (behaviors tasks) — *measured_by*
  > ...six classification datasets (OpenbookQA (Mihaylov et al., 2018), WinoGrande (Sakaguchi et al., 2020), HellaSwag (Zellers et al., 2019), Arc_e (Clark et al., 2018), PIQA (Bisk et al., 2020), MathQA (Amini et al., 2019))...
  - [SVD-LLM V2: Optimizing Singular Value Truncation for Large Language Model Compression](https://aclanthology.org/2025.naacl-long.217.pdf)
- **Helpfulness** (constructs) — *measured_by*
  > HELLASWAG (Zellers et al., 2019): Measures how well the model can generate the most natural continuation from four candidate sentences following a given sentence fragment. ... Helpfulness: evaluated as the averaged normalized scores across all general performance benchmarks we considered. (Section 5.1)
  - [Goal-Conditioned DPO: Prioritizing Safety in Misaligned Instructions](https://aclanthology.org/2025.naacl-long.369.pdf)
- **Robustness** (constructs) — *measured_by*
  > We create noised versions of HellaSwag and find that BLT outperforms in terms of robustness the Llama 3 BPE model by a large margin (Table 2).
  - [Byte Latent Transformer: Patches Scale Better Than Tokens](https://aclanthology.org/2025.acl-long.453.pdf)
- **General reasoning** (constructs) — *measured_by*
  > To evaluate the generalization ability of our method and mitigate the risk of catastrophic forgetting, we conduct experiments on commonsense and reasoning datasets, including CSQA (Talmor et al., 2018), Hellaswag (Zellers et al., 2019), and MMLU-pro (Wang et al., 2024). (Section 5.6)
  - [CulFiT: A Fine-grained Cultural-aware LLM Training Paradigm via Multilingual Critique Data Synthesis](https://aclanthology.org/2025.acl-long.1092.pdf)
- **Commonsense question answering** (behaviors tasks) — *measured_by*
  > ...we list in Table 4 (b–c) the accuracy of our quantized Llama-2 models on the ARC-C, -E (Clark et al., 2018), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2019) and Winogrande (Sakaguchi et al., 2021) common sense question answering... (Section 4)
  - [Radio: Rate–Distortion Optimization for Large Language Model Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/young25b/young25b.pdf)
- **Benchmark overfitting** (constructs) — *measured_by*
  > We evaluate the impact of data contamination using a mix of seven different benchmarks: ARC-Easy (Clark et al., 2018), Social-I-QA (Sap et al., 2019), WinoGrande (Sakaguchi et al., 2021), PiQA (Bisk et al., 2020), BoolQ (Clark et al., 2019), MMLU (Hendrycks et al., 2021), and HellaSwag (Zellers et al., 2019). (Section 3.2)
  - [How Much Can We Forget about Data Contamination?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/bordt25a/bordt25a.pdf)
- **Contextual understanding** (constructs) — *measured_by*
  > to demonstrate contextual understanding and general effectiveness of each model variant, we assess their performance using HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2020), and TruthfulQA (Lin et al., 2021b) benchmarks.
  - [QoS-Efficient Serving of Multiple Mixture-of-Expert LLMs Using Partial Runtime Reconfiguration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/imani25a/imani25a.pdf)
- **Utility preservation** (constructs) — *measured_by*
  > “we evaluate capabilities retention on benchmarks including MMLU and Hellaswag”
  - [Improving LLM Safety Alignment with Dual-Objective Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhao25c/zhao25c.pdf)
- **Functional linguistic competence** (constructs) — *measured_by*
  > To assess this, we use six benchmarks covering... common-sense reasoning (WINOGRANDE (Sakaguchi et al., 2019), HELLASWAG (Zellers et al., 2019)). (Section 3.3)
  - [From Language to Cognition: How LLMs Outgrow the Human Language Network](https://aclanthology.org/2025.emnlp-main.1237.pdf)

### Associated with
- **lm-evaluation-harness** (measurements)
  > Table 2: Zero-shot performance on Language Model Evaluation Harness [56]... HellaSwag
  - [Reinforcing LLM Agents via Policy Optimization with Action Decomposition](https://proceedings.neurips.cc/paper_files/paper/2024/file/bc09efb501c801ed92e181e26a885c2d-Paper-Conference.pdf)
- **Open LLM Leaderboard** (measurements)
  > We evaluate these LLMs using prompts of varying length, ambiguity, and context, sourced from the test set of ARC (Clark et al., 2018), GSM8K (Cobbe et al., 2021), HellaSwag (Zellers et al., 2019), MMLU (Hendrycks et al., 2021), Truthful QA (Lin et al., 2022), and Winogrande (Sakaguchi et al., 2019). These set the performance benchmarks on the HuggingFace Open LLM Leaderboard (Section 4.2)
  - [Transformer Block Coupling and its Correlation with Generalization in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3f7f788b479a26348605a9f97c465d22-Paper-Conference.pdf)
- **OpenCompass** (measurements)
  > "We use Opencompass (Contributors, 2023) to test performance on several widely-used zero-shot benchmarks: PIQA ..., ARC-challenge (ARC-C) ..., ARC-easy (ARC-E) ..., WinoGrande (WG) ..., HellaSwag (HLSG) ..., and CommonSenseQA (CSQA) ..."
  - [MatryoshkaKV: Adaptive KV Compression via Trainable Orthogonal Projection](https://proceedings.iclr.cc/paper_files/paper/2025/file/d7b351608d824a4680344a02b180a947-Paper-Conference.pdf)
- **OLMES** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): MMLU (Hendrycks et al., 2021), HellaSwag (Zellers et al., 2019), ARC Challenge ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **Referring expression understanding** (behaviors tasks)
  > “Further analysis shows a Pearson correlation of 0.88 between the LLM’s original performance on reasoning benchmarks, measured by the HellaSwag score (Zellers et al., 2019), and REC performance”
  - [LLM-wrapper: Black-Box Semantic-Aware Adaptation of Vision-Language Models for Referring Expression Comprehension](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb8f2d4e90018c0fae060dff09a91ce3-Paper-Conference.pdf)
