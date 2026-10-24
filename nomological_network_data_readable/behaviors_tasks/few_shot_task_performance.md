# Few-shot task performance
**Type:** Behavior  
**Referenced in:** 45 papers  
**Also known as:** Few-shot task solving, Few-shot learning, Few-shot inference  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage is performance on downstream or benchmark tasks when only a small number of examples are available, most often as in-context demonstrations in the prompt. Some authors narrow this to answering or completing few-shot benchmark tasks, or to few-shot inference with only a small number of labeled examples per class, while others frame it as rapid adaptation with a small training set. A smaller group uses the same label for scarce-training-data settings rather than prompt examples, especially time series forecasting with only the first 5 to 10% of time steps available for training.

**Variants.** Papers use several nearby names, most commonly few-shot learning, and also few-shot task solving, few-shot inference, few-shot forecasting, and few-shot continual relation extraction. The behavior is studied in long-context question-answering, summarization, and code completion, and in smaller lines of work on time series forecasting and relation extraction. Some labeled-example versions are stated as N-way-K-shot or as having only k labels per class, with one paper specifying k = 3.

**Space of elicitation and scores.** Papers link this behavior to 8 measurement instruments. The prevailing operationalization uses LongBench, which papers describe as a benchmark covering few-shot learning alongside question answering, summarization, synthetic tasks, and code completion; less commonly, papers measure it with ARC, HellaSwag, ARC-Challenge, and GLUE, plus 3 other instruments. These instruments are mostly described as benchmarks or datasets, and one paper uses an evaluation framework to report accuracy averaged over seven few-shot tasks.

**What it is taken as evidence of.** Papers connect it to 4 constructs rather than using one uniform construct label. The most common framing links it to in-context learning, with some papers treating few-shot task performance as a way to measure in-context learning and another relating it to prompting with task-specific demonstrations. Generalization is another recurring link, though the recorded claims differ: one paper reports it as related, while another claims a causal relationship from Generalization to Few-shot task performance. Single-paper links also use it to measure long-context understanding and relate it to continual learning.

## Sources

**[Parameters vs FLOPs: Scaling Laws for Optimal Sparsity for Mixture-of-Experts Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/abnar25a/abnar25a.pdf)**
> The observable performance of a model on a downstream task when provided with a small number of examples in its context.

**[Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d6a55225cebbdc16fbb0e45c5bdf2b-Paper-Conference.pdf) (as "Few-shot task solving")**
> Answering or completing benchmark tasks when provided with only a small number of in-context examples.

**[CLEX: Continuous  Length Extrapolation for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/3df38ca67befaed9c03b95ffee07d9f8-Paper-Conference.pdf) (as "Few-shot learning")**
> Performing tasks based on a small number of in-context examples provided in the input, requiring generalization and pattern recognition within long contexts.

**[Text-space Graph Foundation Models: Comprehensive Benchmarks and New Insights](https://proceedings.neurips.cc/paper_files/paper/2024/file/0e0b39c69663e9c073739adf547ed778-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Few-shot inference")**
> Making predictions on downstream tasks using only a small number of labeled examples per class.

## Relationships

### Few-shot task performance →
- **LongBench** (measurements) — *measured_by*
  > “we further investigate the benefits of long context models for few-shot tasks using two additional datasets (Trec and SAMSum) from LongBench.”
  - [Retrieval meets Long Context Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/d75f29006df67df084e6586f1cb8458c-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > We test the following: 5-shot MMLU [14] and 20-shot HellaSwag [61] benchmarks. (Section 6.1)
  - [SGLang: Efficient Execution of Structured Language Model Programs](https://proceedings.neurips.cc/paper_files/paper/2024/file/724be4472168f31ba1c9ac630f15dec8-Paper-Conference.pdf)
- **Abstraction and Reasoning Corpus** (measurements) — *measured_by*
  > "The ARC benchmark’s emphasis on generalization and few-shot learning"
  - [HYSYNTH: Context-Free LLM Approximation for Guiding Program Synthesis](https://proceedings.neurips.cc/paper_files/paper/2024/file/1c9c85bae6161d52182d0fe2f3640512-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > We test the following: 5-shot MMLU [14] and 20-shot HellaSwag [61] benchmarks. (Section 6.1)
  - [SGLang: Efficient Execution of Structured Language Model Programs](https://proceedings.neurips.cc/paper_files/paper/2024/file/724be4472168f31ba1c9ac630f15dec8-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > Interestingly, CREAM improves over Llama2-7B on ARC-C and HellaSwag. This is because these two tasks are few-shot tasks with longer prompts...
  - [An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf)
- **LongBench-E** (measurements) — *measured_by*
  > we further test LongMamba on the LongBench-E dataset (Bai et al., 2023), which covers 13 long-context applications, such as coding and few-shot learning. (Section 6.2)
  - [LongMamba: Enhancing Mamba's Long-Context Capabilities via Training-Free Receptive Field Enlargement](https://proceedings.iclr.cc/paper_files/paper/2025/file/ab5d50d269e52f8eed497062311ff173-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > We used the Language Model Evaluation Harness framework (Gao et al., 2023) to evaluate accuracy on seven few-shot tasks, and averaged them for performance comparison. (Section 3.1)
  - [Relaxed Recursive Transformers: Effective Parameter Sharing with Layer-wise LoRA](https://proceedings.iclr.cc/paper_files/paper/2025/file/54d6a55225cebbdc16fbb0e45c5bdf2b-Paper-Conference.pdf)

### Associated with
- **In-context learning** (constructs)
  > "Prompting with task-specific demonstrations (i.e., in-context learning (Brown et al., 2020))"
  - [Generative Adapter: Contextualizing Language Models in Parameters with A Single Forward Pass](https://proceedings.iclr.cc/paper_files/paper/2025/file/447708674d7f30492ca5338b36b07d0c-Paper-Conference.pdf)
- **Generalization** (constructs)
  > Humans exhibit remarkable few-shot learning capabilities, rapidly generalizing from a single task demonstration to related conditions by integrating the observed behavior with their internal world model.
  - [VLM Agents Generate Their Own Memories: Distilling Experience into Embodied Programs of Thought](https://proceedings.neurips.cc/paper_files/paper/2024/file/8ac50fd0a4eeeb1f077b17bb7c5353c3-Paper-Conference.pdf)
- **Time series forecasting** (behaviors tasks)
  > Based on the settings in Zhou et al. (2023), we present few-shot forecasting for 10% time steps in training datasets. (Section 4.2)
  - [TEST: Text Prototype Aligned Embedding to Activate LLM's Ability for Time Series](https://proceedings.iclr.cc/paper_files/paper/2024/file/a4352e2c9d93582898a2a20e1f514e8f-Paper-Conference.pdf)
- **Relation extraction** (behaviors tasks)
  > Few-shot Continual Relation Extraction (FCRE) has emerged as a significant challenge in information extraction, necessitating that relation extraction (RE) systems can sequentially identify new relations with limited labeled samples. (Abstract)
  - [Enhancing Discriminative Representation in Similar Relation Clusters for Few-Shot Continual Relation Extraction](https://aclanthology.org/2025.naacl-long.123.pdf)
- **Long-context understanding** (constructs)
  > We evaluate our DSLA model on tasks requiring careful long-range interactions (Bai et al., 2024), including: ... (iii) Few-shot learning requires the model to comprehend a limited number of examples and effectively perform various tasks, including classification, summarization, and reading comprehension.
  - [On-the-Fly Adaptive Distillation of Transformer to Dual-State Linear Attention for Long-Context LLM Serving](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ro25a/ro25a.pdf)
