# SST-2
**Type:** Measurement  
**Referenced in:** 118 papers  
**Also known as:** SST2  

## State of the Field

**What it is.** Across papers, SST-2 is most commonly treated as the Stanford Sentiment Treebank v2, a binary sentiment classification benchmark or dataset. Definitions usually describe movie reviews, or sentences and single sentences extracted from movie reviews, labeled as positive or negative; some papers also place it within GLUE. A smaller set of papers refers to specialized forms or subsets, including an OOD version, use as out-of-domain samples for another task, and subsets selected to build a forget set for unlearning experiments.

**What it is claimed to measure.** Papers link SST-2 to 6 behavioral indicators and 6 constructs, so its reported measurement role is spread across several targets rather than concentrated on one. The prevailing use is to measure sentiment analysis and text classification; among constructs, it is most often used for adversarial robustness and in-context learning, then calibration, while other papers also report it as measuring additional constructs and task-level indicators.

**Space of uses.** Papers link SST-2 to 2 other instruments. It is most often used alongside GLUE, with many papers describing it as a GLUE task or dataset, and the recorded relationships treat GLUE as related to SST-2, with a smaller usage also recording GLUE as measured by SST-2. A smaller line of work links it to Word swap attack, where one paper selects SST-2 because labels are not required and the goal is to focus on adaptation to manipulated prompts; more broadly, most papers use SST-2 as one dataset within larger evaluation suites, including fine-tuning, in-context learning, robustness, and cross-domain setups.

## Sources

**[An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)**
> A sentiment classification benchmark used to evaluate binary sentiment prediction.

**[Shh, don't say that! Domain Certification in LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/27befed4547edcb4bdeacef9472cadee-Paper-Conference.pdf) (as "SST2")**
> The Stanford Sentiment Treebank v2, a dataset for sentiment analysis, used here as a source of out-of-domain samples for the Shakespeare task.

## Relationships

### → SST-2
- **Sentiment analysis** (behaviors tasks) — *measured_by*
  > “Sentiment Analysis (SST-2)”
  - [An LLM can Fool Itself: A Prompt-Based Adversarial Attack](https://proceedings.iclr.cc/paper_files/paper/2024/file/0c72285e193ec90dca93258128698cfb-Paper-Conference.pdf)
- **Text classification** (behaviors tasks) — *measured_by*
  > We study text classification using four datasets: sentiment analysis using SST-2 (Socher et al., 2013)... (Section 4.1)
  - [Privacy-Preserving In-Context Learning for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/572cd21bd5dea96b065476b77d21b3c6-Paper-Conference.pdf)
- **Downstream task performance** (behaviors tasks) — *measured_by*
  > “For fine-tuning task, we consider SST2(Socher et al., 2013), AGNEWS(Zhang et al., 2015), GSM8K(Cobbe et al., 2021) and AlpacaEval (Li et al., 2023a) as the user fine-tuning task.”
  - [Booster: Tackling Harmful Fine-tuning for Large Language Models via Attenuating Harmful Perturbation](https://proceedings.iclr.cc/paper_files/paper/2025/file/a7ac8a21e5a27e7ab31a5f42a0117bdb-Paper-Conference.pdf)
- **Adversarial robustness** (constructs) — *measured_by*
  > We conducted our confidence elicitation attacks on Meta-Llama-3-8B-Instruct (Touvron et al., 2023) and Mistral-7B-Instruct-v0.2 (Jiang et al., 2023) while performing classification on two common datasets to evaluate adversarial robustness: SST-2, AG-News and one modern dataset: StrategyQA (Geva et al., 2021). (Section 4)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **Out-of-distribution generalization** (constructs) — *measured_by*
  > "we test on the OOD SST-2 [128] from [147], paired with unrelated images and those generated with the text prompts (Task R.3)."
  - [MultiTrust: A Comprehensive Benchmark Towards Trustworthy Multimodal Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/586640cda3db2dc77349013dcefee456-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > For the multiple-choice tasks, we use datasets: COPA (Gordon et al., 2012), StoryCloze (Mostafazadeh et al., 2016), NLI (Bowman et al., 2015), MMLU (Hendrycks et al., 2021), SST2 (Socher et al., 2013), SST5 (Socher et al., 2013), BoolQ (Clark et al., 2019), and Winogrande (Sakaguchi et al., 2020)... (Section 4.1)
  - [Semantics-Adaptive Activation Intervention for LLMs via Dynamic Steering Vectors](https://proceedings.iclr.cc/paper_files/paper/2025/file/c4d26a95fd83f8e590f81c54ae670b5d-Paper-Conference.pdf)
- **Calibration** (constructs) — *measured_by*
  > We first demonstrate that LLama3 is well-calibrated for the SST2, AG-News, and StrategyQA tasks, as illustrated in Table 1 and Figure 3. (Section 5.1)
  - [Confidence Elicitation: A New Attack Vector for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/04bb76a98d9f32226b3beba7bd26a51f-Paper-Conference.pdf)
- **Question answering** (behaviors tasks) — *measured_by*
  > For question answering tasks, we utilize BoolQ (from SuperGLUE) and SST-2 (from GLUE) (Section 4).
  - [PortLLM: Personalizing Evolving Large Language Models with Training-Free and Portable Model Patches](https://proceedings.iclr.cc/paper_files/paper/2025/file/59c444334e6bcf4e796f59f6d0bcae2a-Paper-Conference.pdf)
- **Cross-domain generalization** (constructs) — *measured_by*
  > To further demonstrate the generalization ability of our method, we conduct cross-domain experiments. We use three sentiment datasets on SST-2 (Socher et al., 2013), IMDb (Maas et al., 2011), FineFood (McAuley and Leskovec, 2013). (Section 4.1)
  - [SALAD: Improving Robustness and Generalization through Contrastive Learning with Structure-Aware and LLM-Driven Augmented Data](https://aclanthology.org/2025.naacl-long.634.pdf)
- **Prompt robustness** (constructs) — *measured_by*
  > Since labels are not required for this task, we select the SST-2 dataset to focus solely on the models’ ability to adapt to manipulated prompts without being influenced by label accuracy. (Section 4.6)
  - [Direct Prompt Optimization with Continuous Representations](https://aclanthology.org/2025.acl-long.133.pdf)

### Associated with
- **GLUE** (measurements)
  > We first evaluate the language understanding tasks from the GLUE benchmark(Wang et al., 2018) including MNLI, SST2, QNLI and QQP using the RoBERTa model.
  - [Improving LoRA in Privacy-preserving Federated Learning](https://proceedings.iclr.cc/paper_files/paper/2024/file/4e243e95c913b367775d71d7182b99d9-Paper-Conference.pdf)
- **Word swap attack** (measurements)
  > Since labels are not required for this task, we select the SST-2 dataset to focus solely on the models’ ability to adapt to manipulated prompts without being influenced by label accuracy. (Section 4.6)
  - [Direct Prompt Optimization with Continuous Representations](https://aclanthology.org/2025.acl-long.133.pdf)
