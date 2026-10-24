# Zero-shot generalization
**Type:** Construct  
**Referenced in:** 68 papers  
**Also known as:** Zero-shot generalizability, Zero-shot transfer, Zero-shot transferability, Zero-shot control, Zero-shot task classification, Zero-shot learning, Zero-shot learning ability, Zero-shot capability, Zero-shot inference, Zero-shot prompting capability, Zero-shot adaptability, Zero-shot performance  

## State of the Field

**Definition agreement:** Consensus. Most papers define zero-shot generalization as a model's ability to perform new or unseen tasks, datasets, domains, classes, or instructions without task-specific training examples, fine-tuning, or in-context shots, relying on pre-trained knowledge or instructions alone. A few papers narrow this to particular settings such as clinical extraction, time series, or instruction-following, but these are applications of the same core property rather than different phenomena.

**Space of definitions.** Most papers describe it as the ability of a pre-trained model or agent to perform well on unseen tasks, datasets, domains, categories, policies, or constraints without task-specific training, fine-tuning, or exposure to target examples. A common variant makes the zero-shot condition instruction-based, meaning the model acts from instructions or natural-language task descriptions alone, or without in-context examples, while relying on prior training or learned patterns. Smaller task-specific definitions narrow the setting to clinical entity extraction, dialogue understanding, forecasting, control, or task classification, but keep the same core idea.

**Space of facets.** Across definitions, the recurring distinctions are the kind of novelty involved: unseen datasets or domains, unseen downstream tasks, unseen classes or categories, and unseen schemas, labels, guidelines, policies, objects, instructions, or constraints. Papers also use many neighboring labels for largely the same construct, including zero-shot generalizability, zero-shot learning, zero-shot transfer, zero-shot transferability, zero-shot capability, zero-shot inference, zero-shot adaptability, and zero-shot performance, while more specialized names such as zero-shot control, zero-shot prompting capability, and zero-shot task classification denote particular applications. In recorded relationships, it also appears alongside task generalization, cross-domain generalization, in-context learning, and emergent abilities.

**Space of measurement.** Operationalization is broad: papers link it to 19 measurement instruments and 4 behavioral indicators, most often AG News, LAMBADA, WikiText, lm-evaluation-harness, and Arxiv. The instruments are mostly benchmark or dataset-based zero-shot evaluations, covering out-of-domain language modeling corpora, question answering and reasoning sets, multimodal benchmarks, knowledge-graph QA, and time-series forecasting, and one recurring setup uses the lm-evaluation-harness. These operationalizations mirror the dominant definitions, since the evidence frames them as tests on unseen datasets, new domains, unseen constraints, or tasks without task-specific fine-tuning; the linked behavioral indicators are instruction following, image inpainting, image outpainting, and image restoration.

**Links.** Several papers claim a causal relationship from instruction following to zero-shot generalization. Single-paper claims also point from compositionality, speech-text alignment, and graph reasoning to zero-shot generalization, while one paper claims a causal relationship from zero-shot generalization to task generalization and another claims causal relationships from zero-shot generalization to image inpainting and image outpainting. Related links connect it with in-context learning, task generalization, cross-domain generalization, emergent abilities, and image restoration.

## Sources

**[Evaluating the Zero-shot Robustness of Instruction-tuned Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d3221cdb27e49d9c1cd35ad254feccfe-Paper-Conference.pdf)**
> The ability of a pre-trained model to perform well on unseen target datasets without exposure to their training history.

**[SafeWatch: An Efficient Safety-Policy Following Video Guardrail Model with Transparent Explanations](https://proceedings.iclr.cc/paper_files/paper/2025/file/beac6bfb7eac3d651307c16ac747df01-Paper-Conference.pdf) (as "Zero-shot generalizability")**
> The model's ability to perform effectively on new, unseen tasks, policies, or data categories without any specific fine-tuning on them.

**[Entity Decomposition with Filtering: A Zero-Shot Clinical Named Entity Recognition Framework](https://aclanthology.org/2025.naacl-long.150.pdf) (as "Zero-shot learning")**
> The capacity to perform clinical entity extraction without task-specific training examples for the target setting.

**[A Zero-Shot Open-Vocabulary Pipeline for Dialogue Understanding](https://aclanthology.org/2025.naacl-long.387.pdf) (as "Zero-shot transfer")**
> The ability to perform dialogue understanding tasks without task-specific fine-tuning or training on the target domains.

**[LangTime: A Language-Guided Unified Model for Time Series Forecasting with Proximal Policy Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/niu25e/niu25e.pdf) (as "Zero-shot transferability")**
> The ability of the pre-trained model to perform forecasting in unseen domains without task-specific fine-tuning.

**[MaestroMotif: Skill Design from Artificial Intelligence Feedback](https://proceedings.iclr.cc/paper_files/paper/2025/file/2dc5a0faac8102fd47363795f71126ee-Paper-Conference.pdf) (as "Zero-shot control")**
> The ability of an agent to perform a novel task specified in natural language without any task-specific training or fine-tuning.

**[SlimLLM: Accurate Structured Pruning for Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/guo25a/guo25a.pdf) (as "Zero-shot task classification")**
> The model's ability to correctly classify inputs into predefined categories without any task-specific fine-tuning, based solely on its pre-trained knowledge.

**[From Instance Training to Instruction Learning: Task Adapters Generation from Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/50ea4dbd1cff6bd3daef939eff10c092-Paper-Conference.pdf) (as "Zero-shot learning ability")**
> The capability of a model to perform a task given only a natural language description, without having seen any specific training examples for that task.

**[PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf) (as "Zero-shot capability")**
> The ability to perform a task without any specific training examples for that task or condition.

**[FEDMEKI: A Benchmark for Scaling Medical Foundation Models via Federated Knowledge Injection](https://proceedings.neurips.cc/paper_files/paper/2024/file/0235cbb8cd6425d0b55daefce388fc0b-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Zero-shot inference")**
> The ability of a model to perform tasks for which it has not been explicitly trained, by leveraging knowledge gained from other tasks.

**[Boosting Weakly Supervised Referring Image Segmentation via Progressive Comprehension](https://proceedings.neurips.cc/paper_files/paper/2024/file/a97f0218b49bc17ea3f121a0e724f028-Paper-Conference.pdf) (as "Zero-shot prompting capability")**
> The ability of a Large Language Model to perform tasks based on instructions alone, without any provided examples (shots).

**[Answering Narrative-Driven Recommendation Queries via a Retrieve--Rank Paradigm and the OCG-Agent](https://aclanthology.org/2025.emnlp-main.667.pdf) (as "Zero-shot adaptability")**
> The model's ability to perform tasks, such as narrative recommendation, without any specific examples or fine-tuning for that task.

**[On the Analysis and Distillation of Emergent Outlier Properties in Pre-trained Language Models](https://aclanthology.org/2025.naacl-long.430.pdf) (as "Zero-shot performance")**
> The ability of a model to perform tasks without any task-specific fine-tuning or examples provided in the context.

## Relationships

### Zero-shot generalization →
- **WikiText** (measurements) — *measured_by*
  > We also evaluate the ability of BD3-LMs to generalize to unseen datasets in a zero-shot setting... We evaluate the likelihood of models trained with OWT on datasets... Wikitext... (Section 6.1)
  - [Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ede97c3e082c6df10a8d6103a2eebd2-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > We also evaluate the ability of BD3-LMs to generalize to unseen datasets in a zero-shot setting... We evaluate the likelihood of models trained with OWT on datasets... Lambada... (Section 6.1)
  - [Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ede97c3e082c6df10a8d6103a2eebd2-Paper-Conference.pdf)
- **AG News** (measurements) — *measured_by*
  > We also evaluate the ability of BD3-LMs to generalize to unseen datasets in a zero-shot setting... We evaluate the likelihood of models trained with OWT on datasets... AG News... (Section 6.1)
  - [Block Diffusion: Interpolating Between Autoregressive and Diffusion Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7ede97c3e082c6df10a8d6103a2eebd2-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > “Zero-shot performance was evaluated using the LM Evaluation Harness (Gao et al., 2021)”
  - [MoDeGPT: Modular Decomposition for Large Language Model Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/fb7214d2fdfd84165b08539d59c92e07-Paper-Conference.pdf)
- **Pseudo-label generation** (behaviors tasks) — *causes*
  > Leveraging the LLMs’ zero-shot learning capability, this framework generates pseudo-labels, providing a foundation for entity alignment without ground truth labels. (Section 1).
  - [Entity Alignment with Noisy Annotations from Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/1b57aaddf85ab01a2445a79c9edc1f4b-Paper-Conference.pdf)
- **ScienceQA** (measurements) — *measured_by*
  > ScienceQA with multiple choice are used to evaluate the zero-shot generalization on scientific question answering. (Section 4.1)
  - [Efficient Large Multi-modal Models via Visual Context Compression](https://proceedings.neurips.cc/paper_files/paper/2024/file/871ed095b734818cfba48db6aeb25a62-Paper-Conference.pdf)
- **LM1B** (measurements) — *measured_by*
  > We evaluate the model capacity for both the OpenWebText test set and seven out-of-domain unseen datasets, used to validate the models' ability in zero-shot generalization. These unseen datasets include Our Penn Tree Bank (PTB)... Wikitext... LM1B
  - [Energy-Based Diffusion Language Models for Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/535baca36883a4e0450423b26b150a48-Paper-Conference.pdf)
- **PubMed** (measurements) — *measured_by*
  > We evaluate the model capacity for both the OpenWebText test set and seven out-of-domain unseen datasets, used to validate the models' ability in zero-shot generalization. These unseen datasets include Our Penn Tree Bank (PTB)... Wikitext... LM1B, Lambada... AG News... Pubmed
  - [Energy-Based Diffusion Language Models for Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/535baca36883a4e0450423b26b150a48-Paper-Conference.pdf)
- **Arxiv** (measurements) — *measured_by*
  > We evaluate the model capacity for both the OpenWebText test set and seven out-of-domain unseen datasets, used to validate the models' ability in zero-shot generalization. These unseen datasets include Our Penn Tree Bank (PTB)... Wikitext... LM1B, Lambada... AG News... Pubmed and Arxiv
  - [Energy-Based Diffusion Language Models for Text Generation](https://proceedings.iclr.cc/paper_files/paper/2025/file/535baca36883a4e0450423b26b150a48-Paper-Conference.pdf)
- **MM-Vet** (measurements) — *measured_by*
  > Unseen tasks are datasets that were not involved in the recipe construction process. These tasks are used to evaluate the zero-shot generalizability of our method. Specifically, we employed the MM-Vet (Yu et al., 2024), MM-Bench (Zhang et al., 2023a), MM-Bench-Chinese (Zhang et al., 2023a), VizWiz (Gurari et al., 2018), and POPE (Li et al., 2023) datasets to assess this capability.
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > Unseen tasks are datasets that were not involved in the recipe construction process. These tasks are used to evaluate the zero-shot generalizability of our method. Specifically, we employed the MM-Vet (Yu et al., 2024), MM-Bench (Zhang et al., 2023a), MM-Bench-Chinese (Zhang et al., 2023a), VizWiz (Gurari et al., 2018), and POPE (Li et al., 2023) datasets to assess this capability.
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
- **VizWiz** (measurements) — *measured_by*
  > Unseen tasks are datasets that were not involved in the recipe construction process. These tasks are used to evaluate the zero-shot generalizability of our method. Specifically, we employed the MM-Vet (Yu et al., 2024), MM-Bench (Zhang et al., 2023a), MM-Bench-Chinese (Zhang et al., 2023a), VizWiz (Gurari et al., 2018), and POPE (Li et al., 2023) datasets to assess this capability.
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
- **POPE** (measurements) — *measured_by*
  > Unseen tasks are datasets that were not involved in the recipe construction process. These tasks are used to evaluate the zero-shot generalizability of our method. Specifically, we employed the MM-Vet (Yu et al., 2024), MM-Bench (Zhang et al., 2023a), MM-Bench-Chinese (Zhang et al., 2023a), VizWiz (Gurari et al., 2018), and POPE (Li et al., 2023) datasets to assess this capability.
  - [REMEDY: Recipe Merging Dynamics in Large Vision-Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/4065a881baab1744bfba208a4361bbb1-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > our method surpasses all the baseline methods, even though it has never seen data from the GSM dataset, indicating the strong zero-shot generalization capability of the proposed method. (Section 4.3)
  - [Multiagent Finetuning: Self Improvement with Diverse Reasoning Chains](https://proceedings.iclr.cc/paper_files/paper/2025/file/1d50221b03ced7152d8750c9d1e66cba-Paper-Conference.pdf)
- **Traffic** (measurements) — *measured_by*
  > Comparison of zero-shot performance of pre-trained models. The input sequence length is set to 96 for the Traffic dataset
  - [LangTime: A Language-Guided Unified Model for Time Series Forecasting with Proximal Policy Optimization](https://raw.githubusercontent.com/mlresearch/v267/main/assets/niu25e/niu25e.pdf)
- **FreebaseQA** (measurements) — *measured_by*
  > To further evaluate the generalizability of GCR, we conduct zero-shot transfer experiments on three new KGQA datasets: FreebaseQA, CSQA and MedQA (Section 5.1).
  - [Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25t/luo25t.pdf)
- **CommonsenseQA** (measurements) — *measured_by*
  > To further evaluate the generalizability of GCR, we conduct zero-shot transfer experiments on three new KGQA datasets: FreebaseQA, CSQA and MedQA (Section 5.1).
  - [Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25t/luo25t.pdf)
- **MedQA** (measurements) — *measured_by*
  > To further evaluate the generalizability of GCR, we conduct zero-shot transfer experiments on three new KGQA datasets: FreebaseQA, CSQA and MedQA (Section 5.1).
  - [Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25t/luo25t.pdf)
- **GrailQA** (measurements) — *measured_by*
  > In the validation and the test sets, 50% of the questions include KB elements that are unseen in the training set (zero-shot generalization tests), 25% consist of unseen compositions of KB elements seen in the training set (compositional generalization tests), and the remaining 25% are randomly sampled from the training set (I.I.D. tests). (Section 5.1)
  - [Beyond Seen Data: Improving KBQA Generalization Through Schema-Guided Logical Form Generation](https://aclanthology.org/2025.emnlp-main.442.pdf)

### → Zero-shot generalization
- **Instruction following** (behaviors tasks) — *causes*
  > multimodal instruction tuning has been introduced (Liu et al., 2024), full fine-tuning pre-trained models with diverse multimodal instruction-following datasets, thereby enabling zero-shot generalization to previously unseen multimodal tasks. (Section 1)
  - [Re-Imagining Multimodal Instruction Tuning: A Representation View](https://proceedings.iclr.cc/paper_files/paper/2025/file/dcf88cbc8d01ce7309b83d0ebaeb9d29-Paper-Conference.pdf)
- **Compositionality** (constructs) — *causes*
  > “compositionality contributes significantly to zero-shot generalization”
  - [Human-Object Interaction Detection Collaborated with Large Relation-driven Diffusion Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/2a54def490213ee10631b991c5acc6b5-Paper-Conference.pdf)
- **Speech-text alignment** (constructs) — *causes*
  > ...through complex training pipelines gradually enables S to learn a correct alignment that can preserve the LLM zero-shot capability (Section 3).
  - [Wav2Prompt: End-to-End Speech Prompt Learning and Task-based Fine-tuning for Text-based LLMs](https://aclanthology.org/2025.naacl-long.354.pdf)

### Associated with
- **In-context learning** (constructs)
  > our method randomly samples a varying number of examples during training, endowing the embedding model with in-context learning abilities while maintaining its zero-shot capabilities. (Abstract)
  - [Making Text Embedders Few-Shot Learners](https://proceedings.iclr.cc/paper_files/paper/2025/file/5eba8556ce2d1afff57591464d48fbc3-Paper-Conference.pdf)
- **Task generalization** (constructs)
  > for better cross-task generalization, the "zero-shot" learning ability of LLMs is crucial for real-world applications (Section 1 Introduction).
  - [From Instance Training to Instruction Learning: Task Adapters Generation from Instructions](https://proceedings.neurips.cc/paper_files/paper/2024/file/50ea4dbd1cff6bd3daef939eff10c092-Paper-Conference.pdf)
- **Image restoration** (behaviors tasks)
  > Our proposed model also achieves comparable inference efficiency with these baseline models and exhibits superior zero-shot capabilities in blind restoration and combination tasks.
  - [PromptFix: You Prompt and We Fix the Photo](https://proceedings.neurips.cc/paper_files/paper/2024/file/468c9ec4215e05b6488ac307d377662e-Paper-Conference.pdf)
- **Emergent abilities** (constructs)
  > Examples include zero-shot task transfer (Radford et al., 2021) and few-shot learning (Brown et al., 2020). This is sometimes known as the emergent abilities of LLMs (Section 2).
  - [Wav2Prompt: End-to-End Speech Prompt Learning and Task-based Fine-tuning for Text-based LLMs](https://aclanthology.org/2025.naacl-long.354.pdf)
- **Cross-domain generalization** (constructs)
  > This critical limitation creates an urgent need for a transformative recommendation paradigm with robust Zero-Shot Generalization capabilities that can adapt seamlessly across diverse scenarios without prior exposure to specific users or items (Section 1)
  - [RecGPT: A Foundation Model for Sequential Recommendation](https://aclanthology.org/2025.emnlp-main.513.pdf)
- **Image inpainting** (behaviors tasks)
  > VAR further showcases zero-shot generalization ability in downstream tasks including image in-painting, out-painting, and editing.
  - [Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a24e284b187f662681440ba15c416fb-Paper-Conference.pdf)
- **Image outpainting** (behaviors tasks)
  > VAR further showcases zero-shot generalization ability in downstream tasks including image in-painting, out-painting, and editing.
  - [Visual Autoregressive Modeling: Scalable Image Generation via Next-Scale Prediction](https://proceedings.neurips.cc/paper_files/paper/2024/file/9a24e284b187f662681440ba15c416fb-Paper-Conference.pdf)
- **Graph reasoning** (constructs)
  > “This highlights the strong zero-shot generalizability of its graph reasoning capabilities to unseen datasets and KGs without additional training.”
  - [Graph-constrained Reasoning: Faithful Reasoning on Knowledge Graphs with Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25t/luo25t.pdf)
