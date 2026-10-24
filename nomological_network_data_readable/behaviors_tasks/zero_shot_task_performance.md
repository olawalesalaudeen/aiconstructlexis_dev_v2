# Zero-shot task performance
**Type:** Behavior  
**Referenced in:** 23 papers  
**Also known as:** Zero-shot Evaluation, Zero-shot reasoning, Zero-shot downstream task performance  

## State of the Field

**Space of definitions.** Across the papers, the prevailing usage treats this behavior as performance on downstream or language-understanding tasks when the model is given no in-context examples and no task-specific fine-tuning or training. Definitions repeatedly describe answering questions or carrying out tasks such as question answering, commonsense reasoning, reading comprehension, or natural language inference from the prompt alone, and success is usually reported as accuracy on benchmark tasks. A smaller usage treats it as zero-evaluation performance on LAMBADA and WikiText using perplexity scores.

**Variants.** Papers use several nearby labels for the same behavior, including zero-shot evaluation, zero-shot reasoning, and zero-shot downstream task performance. The settings are mostly downstream NLP benchmarks, commonly framed as question answering and commonsense reasoning, though some definitions emphasize multiple-choice and yes/no reasoning tasks, reading-comprehension datasets, instruction-only evaluation, or broader natural language tasks. Examples named by papers include HellaSwag, PIQA, ARC, WinoGrande, and MMLU.

**Space of elicitation and scores.** Papers link this behavior to 21 measurement instruments. The most common setup is that it is measured by lm-evaluation-harness, with HellaSwag, PIQA, ARC-Challenge, and WinoGrande appearing most often after that, and the remaining links spread across other benchmark tasks. These instruments are usually used to report zero-shot accuracy, sometimes as mean or average accuracy across tasks or runs, as in "average accuracy over five runs in each table" (Quamba2: A Robust and Scalable Post-training Quantization Framework for Selective State Space Models), while one paper measures zero-evaluation performance on LAMBADA and WikiText with perplexity scores.

**What it is taken as evidence of.** Across linked constructs, papers connect this behavior to only one construct, Helpfulness. In that usage, helpfulness is measured by zero-shot task performance, with a safety-head ablation study using lm-eval to assess model performance on zero-shot tasks after ablation. No other construct link appears in the papers.

## Sources

**[CBQ: Cross-Block Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/15212bd2265c4a3ab0dbc1b1982c1b69-Paper-Conference.pdf)**
> The observable performance of a model on various language understanding tasks, such as question answering and commonsense reasoning, when given no in-context examples.

**[Harnessing Diversity for Important Data Selection in Pretraining Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b588d9b67932b459ea66ff6e2804c6b3-Paper-Conference.pdf) (as "Zero-shot Evaluation")**
> The observable behavior of performing tasks without any task-specific fine-tuning or examples provided in the prompt.

**[GPTAQ: Efficient Finetuning-Free Quantization for Asymmetric Calibration](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25dn/li25dn.pdf) (as "Zero-shot reasoning")**
> Answering benchmark questions without task-specific fine-tuning across multiple commonsense and reading-comprehension datasets.

**[SLiM: One-shot Quantization and Sparsity with Low-rank Approximation for LLM Weight Compression](https://raw.githubusercontent.com/mlresearch/v267/main/assets/mozaffari25a/mozaffari25a.pdf) (as "Zero-shot downstream task performance")**
> The model's ability to perform various natural language tasks without any task-specific training, as evaluated on benchmarks like MMLU, Piqa, and Arc.

## Relationships

### Zero-shot task performance →
- **lm-evaluation-harness** (measurements) — *measured_by*
  > For zero-shot evaluation, we use seven tasks from EleutherAI LM Harness (Gao et al., 2021).
  - [A Simple and Effective Pruning Approach for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/14c856c7a41297804de4c4890e846b25-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > Secondly, we measure zero-shot accuracy on five tasks: WinoGrande (Sakaguchi et al., 2021), PiQA (Tata & Patel, 2003), HellaSwag, ARC-easy and ARC-challenge (Clark et al., 2018). (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > Secondly, we measure zero-shot accuracy on five tasks: WinoGrande (Sakaguchi et al., 2021), PiQA (Tata & Patel, 2003), HellaSwag, ARC-easy and ARC-challenge (Clark et al., 2018). (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > Secondly, we measure zero-shot accuracy on five tasks: WinoGrande (Sakaguchi et al., 2021), PiQA (Tata & Patel, 2003), HellaSwag, ARC-easy and ARC-challenge (Clark et al., 2018). (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > The other is reported by the accuracy metric of zero-shot language tasks (Gao et al. (2021)) on PIQA (Bisk et al. (2020a)), HellaSwag (Clark et al. (2018)), ARC (Clark et al. (2018)), Mutual (Cui et al. (2020)) and Ehics (Hendrycks et al. (2020a)). (Section 5.1)
  - [CBQ: Cross-Block Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/15212bd2265c4a3ab0dbc1b1982c1b69-Paper-Conference.pdf)
- **LAMBADA** (measurements) — *measured_by*
  > We measure the zero-evaluation performance of trained GPT models on LAMBADA and WikiText using perplexity scores. (Section 5.2)
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > Secondly, we measure zero-shot accuracy on five tasks: WinoGrande (Sakaguchi et al., 2021), PiQA (Tata & Patel, 2003), HellaSwag, ARC-easy and ARC-challenge (Clark et al., 2018). (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > Secondly, we measure zero-shot accuracy on five tasks: WinoGrande (Sakaguchi et al., 2021), PiQA (Tata & Patel, 2003), HellaSwag, ARC-easy and ARC-challenge (Clark et al., 2018). (Section 5)
  - [SpQR: A Sparse-Quantized Representation for Near-Lossless LLM Weight Compression](https://proceedings.iclr.cc/paper_files/paper/2024/file/1787533e171dcc8549cc2eb5a4840eec-Paper-Conference.pdf)
- **BoolQ** (measurements) — *measured_by*
  > evaluate zero-shot performance on seven downstream tasks: BoolQ (Clark et al., 2019), ARC Easy and Challenge (Clark et al., 2018), HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2021), OpenbookQA (Mihaylov et al., 2018), and PIQA (Bisk et al., 2020) (Section 4.1).
  - [Determining Layer-wise Sparsity for Large Language Models Through a Theoretical Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25ax/huang25ax.pdf)
- **MMLU** (measurements) — *measured_by*
  > For a fair comparison, we evaluate the models on MMLU (23), Arc Challenge (6), and OpenBookQA (35) zero-shot tasks implemented in Language Model Evaluation Harness (18).
  - [SLoPe: Double-Pruned Sparse Plus Lazy Low-Rank Adapter Pretraining of LLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/3504a4fa45685d668ce92797fbbf1895-Paper-Conference.pdf)
- **MuTual** (measurements) — *measured_by*
  > The other is reported by the accuracy metric of zero-shot language tasks (Gao et al. (2021)) on PIQA (Bisk et al. (2020a)), HellaSwag (Clark et al. (2018)), ARC (Clark et al. (2018)), Mutual (Cui et al. (2020)) and Ehics (Hendrycks et al. (2020a)). (Section 5.1)
  - [CBQ: Cross-Block Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/15212bd2265c4a3ab0dbc1b1982c1b69-Paper-Conference.pdf)
- **ETHICS** (measurements) — *measured_by*
  > The other is reported by the accuracy metric of zero-shot language tasks (Gao et al. (2021)) on PIQA (Bisk et al. (2020a)), HellaSwag (Clark et al. (2018)), ARC (Clark et al. (2018)), Mutual (Cui et al. (2020)) and Ehics (Hendrycks et al. (2020a)). (Section 5.1)
  - [CBQ: Cross-Block Quantization for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/15212bd2265c4a3ab0dbc1b1982c1b69-Paper-Conference.pdf)
- **WikiText** (measurements) — *measured_by*
  > We measure the zero-evaluation performance of trained GPT models on LAMBADA and WikiText using perplexity scores. (Section 5.2)
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)
- **COPA** (measurements) — *measured_by*
  > “Table 1. Comparison of zero-evaluation performance... COPA ↑”
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)
- **RACE** (measurements) — *measured_by*
  > “Table 1. Comparison of zero-evaluation performance... RACE ↑”
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)
- **WiC** (measurements) — *measured_by*
  > “Table 1. Comparison of zero-evaluation performance... WIC ↑”
  - [MERIT: Maximum-normalized Element-wise Ratio for Language Model Large-batch Training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/luo25u/luo25u.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > evaluate zero-shot performance on seven downstream tasks: BoolQ (Clark et al., 2019), ARC Easy and Challenge (Clark et al., 2018), HellaSwag (Zellers et al., 2019), WinoGrande (Sakaguchi et al., 2021), OpenbookQA (Mihaylov et al., 2018), and PIQA (Bisk et al., 2020) (Section 4.1).
  - [Determining Layer-wise Sparsity for Large Language Models Through a Theoretical Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25ax/huang25ax.pdf)
