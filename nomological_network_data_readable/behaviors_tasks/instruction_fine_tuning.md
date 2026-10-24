# Instruction fine-tuning
**Type:** Behavior  
**Referenced in:** 33 papers  
**Also known as:** Fine-tuning, Cross-lingual adaptation, Continual instruction tuning, Instruction tuning, Visual instruction tuning, Instruction-tuning, Continued pretraining, Language model fine-tuning, Supervised fine-tuning  

## State of the Field

Across the surveyed literature, instruction fine-tuning is most commonly described as the process of adapting a pre-trained language model to better follow user commands by training it on a dataset of instructions and their desired outputs. This is frequently situated within the broader context of supervised fine-tuning, which involves updating a model on a labeled, task-specific dataset to improve performance on specific objectives. The provided data also details several specialized applications of this behavior, such as 'continual instruction tuning' for sequential tasks, 'visual instruction tuning' for multimodal inputs, and 'speech-to-speech instruction following' for spoken interactions. The effectiveness of instruction fine-tuning is operationalized and measured through a wide array of evaluation benchmarks, including general language understanding suites like GLUE, multitask evaluations like MMLU, mathematical reasoning datasets such as GSM8k and MATH, and commonsense reasoning tasks like PIQA and SocialIQA. This behavior is studied in relation to several other concepts, including methods for parameter efficiency, and is also linked to model properties like faithfulness, knowledge retention, and convergence. Some papers report that the process can influence other model behaviors, suggesting it may cause catastrophic forgetting and is related to a model's editability.

## Sources

**[SLTrain: a sparse plus low rank approach for parameter and memory efficient pretraining](https://proceedings.neurips.cc/paper_files/paper/2024/file/d63cf0622eed012a17fe88fced64dcb8-Paper-Conference.pdf) (as "Fine-tuning")**
> Updating a pretrained model on downstream tasks to improve performance on specific objectives.

**[Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf) (as "Continual instruction tuning")**
> Sequentially fine-tuning a language model on a stream of instruction-following tasks.

**[Data Pruning by Information Maximization](https://proceedings.iclr.cc/paper_files/paper/2025/file/7d848891e365ca623dc8352db9782585-Paper-Conference.pdf) (as "Instruction tuning")**
> The process of fine-tuning a large language model on a dataset of instructions and demonstrations to improve its ability to follow user commands.

**[Hierarchical Autoregressive Transformers: Combining Byte- and Word-Level Processing for Robust, Adaptable Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/7f69eee2fafab3743a3d2ae5981c949f-Paper-Conference.pdf) (as "Cross-lingual adaptation")**
> Improving performance on a new language during continued pretraining while preserving performance on the original language.

**[Maintaining Structural Integrity in Parameter Spaces for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/08487598819cba9feca884ef0d442950-Paper-Conference.pdf) (as "Visual instruction tuning")**
> Following multimodal instructions that combine language and vision inputs to produce appropriate responses.

**[Comparing Specialised Small and General Large Language Models on Text Classification: 100 Labelled Samples to Achieve Break-Even Performance](https://aclanthology.org/2025.emnlp-main.9.pdf) (as "Instruction-tuning")**
> Adapting a language model to better follow task instructions by training it on a collection of instruction-response pairs.

**[Mixture of Weight-shared Heterogeneous Group Attention Experts for Dynamic Token-wise KV Optimization](https://aclanthology.org/2025.emnlp-main.1166.pdf) (as "Continued pretraining")**
> The process of further training a pretrained model on a large corpus of text to enhance its general language modeling capabilities.

**[COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf) (as "Language model fine-tuning")**
> The task of adapting a pre-trained language model to a specific downstream task or domain using a smaller, task-specific dataset.

**[Adam-mini: Use Fewer Learning Rates To Gain More](https://proceedings.iclr.cc/paper_files/paper/2025/file/45ae878717399e6f62d57c65f052cd46-Paper-Conference.pdf) (as "Supervised fine-tuning")**
> The process of adapting a pre-trained language model to a specific downstream task using a labeled dataset.

## Relationships

### Instruction fine-tuning →
- **GLUE** (measurements) — *measured_by*
  > We evaluate GaRare for fine-tuning on the GLUE benchmark (Wang et al., 2019), which comprises a variety of tasks such as sentiment analysis, question answering, and textual entailment. (Section 6.3)
  - [On the Optimization Landscape of Low Rank Adaptation Methods for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/c34262c35aa5f8c1a091822cbb2020c2-Paper-Conference.pdf)
- **GSM8K** (measurements) — *measured_by*
  > For LLM fine-tuning, we conduct experiments in math corpus, and evaluate on Mathmeticas (Davies et al., 2021), SVAMP (Patel et al., 2021), NumGLUE (Mishra et al., 2022), and GSM8K (Cobbe et al., 2021). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > In this section, we compared the performance of MCNC and NOLA in parameter-efficient fine-tuning... Additionally, we report MMLU (Massively Multitask Language Understanding) (Hendrycks et al., 2021) 5-shot accuracy following the standard practice. (Section 4.2)
  - [MCNC: Manifold-Constrained Reparameterization for Neural Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f63d2963526bdd9ff1b8bcc2dc9905a-Paper-Conference.pdf)
- **Instruction following ability** (constructs) — *causes*
  > Instruction tuning has been widely adopted to tailor the behavior of base Large Language Models (LLMs) to align with specific tasks and user intents... The success of instruction tuning depends on the availability of high-quality instruction datasets.
  - [Stronger Models are Not Always Stronger Teachers for Instruction Tuning](https://aclanthology.org/2025.naacl-long.224.pdf)
- **Catastrophic forgetting** (behaviors tasks) — *causes*
  > However, a notable concern with such continual tuning is 'catastrophic forgetting'
  - [Unlocking the Power of Function Vectors for Characterizing and Mitigating Catastrophic Forgetting in Continual Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/74fc5575632191d96881d8015f79dde3-Paper-Conference.pdf)
- **MATH** (measurements) — *measured_by*
  > For LLM fine-tuning, we conduct experiments in math corpus, and evaluate on Mathmeticas (Davies et al., 2021), SVAMP (Patel et al., 2021), NumGLUE (Mishra et al., 2022), and GSM8K (Cobbe et al., 2021). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **SVAMP** (measurements) — *measured_by*
  > For LLM fine-tuning, we conduct experiments in math corpus, and evaluate on Mathmeticas (Davies et al., 2021), SVAMP (Patel et al., 2021), NumGLUE (Mishra et al., 2022), and GSM8K (Cobbe et al., 2021). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **NumGLUE** (measurements) — *measured_by*
  > For LLM fine-tuning, we conduct experiments in math corpus, and evaluate on Mathmeticas (Davies et al., 2021), SVAMP (Patel et al., 2021), NumGLUE (Mishra et al., 2022), and GSM8K (Cobbe et al., 2021). (Section 6.1)
  - [COAT: Compressing Optimizer states and Activations for Memory-Efficient FP8 Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/6ac807c9b296964409b277369e55621a-Paper-Conference.pdf)
- **Commonsense170K** (measurements) — *measured_by*
  > we fine-tune LLaMA2-7B on Commonsense170K (Hu et al., 2023)
  - [SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a70ad3d9c704fb9b81b5c69eda722dc-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > Table 4: Fine-tuning performance of LLaMa2-7B on various downstream tasks.
  - [SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a70ad3d9c704fb9b81b5c69eda722dc-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > Table 4: Fine-tuning performance of LLaMa2-7B on various downstream tasks.
  - [SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a70ad3d9c704fb9b81b5c69eda722dc-Paper-Conference.pdf)
- **SIQA** (measurements) — *measured_by*
  > Table 4: Fine-tuning performance of LLaMa2-7B on various downstream tasks.
  - [SPAM: Spike-Aware Adam with Momentum Reset for Stable LLM Training](https://proceedings.iclr.cc/paper_files/paper/2025/file/7a70ad3d9c704fb9b81b5c69eda722dc-Paper-Conference.pdf)
- **Instruction following** (behaviors tasks) — *causes*
  > Instruction Tuning finetunes the pretrained models on demonstrations of instruction following. (Section 4.1.1)
  - [Gumbel Counterfactual Generation From Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e15790966a4a9d85d688635c88ee6d8a-Paper-Conference.pdf)
- **Hallucination** (behaviors tasks) — *causes*
  > The third example demonstrates a case where both the original and the counterfactual model hallucinate (the subject of the sentence was actually an academic), but the content of the hallucination changes as a result of the intervention.
  - [Gumbel Counterfactual Generation From Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/e15790966a4a9d85d688635c88ee6d8a-Paper-Conference.pdf)
- **MMBench** (measurements) — *measured_by*
  > “we employ FLoRA to fine-tune LLaVA-1.5-7B ... on visual instruction tuning tasks, which include seven vision-language benchmarks: ... MMBench”
  - [Maintaining Structural Integrity in Parameter Spaces for Parameter Efficient Fine-tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/08487598819cba9feca884ef0d442950-Paper-Conference.pdf)
- **SlimPajama** (measurements) — *measured_by*
  > “fine-tuning LLaMA-2 (Touvron et al., 2023) and LLaMA-3.1 (Dubey et al., 2024) on continuous pretraining task SlimPajama (Soboleva et al., 2023)”
  - [QERA: an Analytical Framework for Quantization Error Reconstruction](https://proceedings.iclr.cc/paper_files/paper/2025/file/21718991f6acf19a42376b5c7a8668c5-Paper-Conference.pdf)
- **Alpaca instruction dataset** (measurements) — *measured_by*
  > "We conducted fine-tuning experiments on two variants of the LLaMA-2 (Touvron et al., 2023) language model, LLaMA 7B, and LLaMA 13B, using the Alpaca dataset as our training data"
  - [MCNC: Manifold-Constrained Reparameterization for Neural Compression](https://proceedings.iclr.cc/paper_files/paper/2025/file/2f63d2963526bdd9ff1b8bcc2dc9905a-Paper-Conference.pdf)
- **MT-Bench** (measurements) — *measured_by*
  > “we utilized the alpaca dataset Taori et al. (2023) for additional fine-tuning on the Llama3-base model and evaluated the outcomes using the MT-Bench Zheng et al. (2023).”
  - [DataGen: Unified Synthetic Dataset Generation via Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/a01e69aa9c3c61fcb40ea378e71fc780-Paper-Conference.pdf)
- **Super-NaturalInstructions** (measurements) — *measured_by*
  > "Our instruction tuning data are derived from Super-Natural Instructions (Wang et al., 2022)"
  - [PEARL: Towards Permutation-Resilient LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/fad8e1915f66161581bb127ccf01092e-Paper-Conference.pdf)
- **BIG-Bench Hard** (measurements) — *measured_by*
  > “We utilize the same candidate dataset, comprising FLAN V2 (Longpre et al., 2023), COT (Wei et al., 2022), DOLLY (Conover et al., 2023) and OPEN ASSISTANT 1 (K¨opf et al., 2024), with MMLU ... and BBH ... serving as the target tasks for evaluation.”
  - [TAROT: Targeted Data Selection via Optimal Transport](https://raw.githubusercontent.com/mlresearch/v267/main/assets/feng25l/feng25l.pdf)

### Associated with
- **Geometric reasoning** (constructs)
  > we also fine-tune the open-source model LLaMA3-8B-Instruct using question-answer pairs but find that this does not necessarily improve its understanding of geometric structures.
  - [Do Large Language Models Truly Understand Geometric Structures?](https://proceedings.iclr.cc/paper_files/paper/2025/file/8de035590685bf7389da6a769fbcecce-Paper-Conference.pdf)
- **Parameter efficiency** (constructs)
  > "LoRA is a highly effective strategy for finetuning large pretrained models"
  - [Efficient Learning with Sine-Activated Low-Rank Matrices](https://proceedings.iclr.cc/paper_files/paper/2025/file/112d8e0c7563de6e3408b49a09b4d8a3-Paper-Conference.pdf)
- **Data quality** (constructs)
  > “Data selection and ﬁltering are essential for improving LLM performance in instruction tuning.”
  - [Improving Data Efficiency via Curating LLM-Driven Rating Systems](https://proceedings.iclr.cc/paper_files/paper/2025/file/faa6144674bce872365874c576b4f56f-Paper-Conference.pdf)
- **Convergence** (constructs)
  > we theoretically analyze the convergence of fine-tuning on the synthetic examples generated by GRADMM.
  - [Synthetic Text Generation for Training Large Language Models via Gradient Matching](https://raw.githubusercontent.com/mlresearch/v267/main/assets/nguyen25c/nguyen25c.pdf)
- **LoRA** (measurements)
  > “BDIA is complementary to LoRA.”
  - [On Exact Bit-level Reversible Transformers Without Changing Architecture](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25ao/zhang25ao.pdf)
- **Error detection** (behaviors tasks)
  > We fine-tune Llama3 8B-Instruct model (Dubey et al., 2024) using curated data and evaluate its performance on MMLU-Redux. (Section 4)
  - [Are We Done with MMLU?](https://aclanthology.org/2025.naacl-long.262.pdf)
