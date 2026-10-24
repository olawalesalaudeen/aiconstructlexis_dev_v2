# Zero-shot question answering
**Type:** Behavior  
**Referenced in:** 9 papers  
**Also known as:** Zero-shot Question Answering  

## State of the Field

**Space of definitions.** The prevailing usage treats zero-shot question answering as answering questions without task-specific fine-tuning, additional training, or task-specific examples in the prompt or context. Most formulations emphasize correct or accurate answers under this zero-shot condition, and several papers operationalize success as zero-shot accuracy on benchmark tasks. A narrower framing specifies generating correct answers to multiple-choice questions, while a broader one includes answering downstream or reasoning tasks from provided context, general knowledge, or a model's internal knowledge and the prompt.

**Variants.** Papers use several nearby labels for the behavior, including zero-shot QA, zero-shot evaluation, zero-shot accuracy, and zero-shot tasks. A smaller line of work broadens it beyond question answering to downstream natural language understanding or reasoning tasks, while other definitions keep it centered on question answering, sometimes across various domains. The setting remains zero-shot throughout, and one paper explicitly notes that all test data used in evaluation are from zero-shot settings.

**Space of elicitation and scores.** Papers link this behavior to 11 measurement instruments. The most frequently linked are BoolQ, PIQA, WinoGrande, HellaSwag, and lm-evaluation-harness, with 6 other instruments also used. Most of these instruments are benchmark datasets on which papers report zero-shot accuracy, while lm-evaluation-harness appears as a toolkit used to run the zero-shot tasks and evaluations.

**What it is taken as evidence of.** Across the papers, zero-shot question answering is not linked to any construct. Accordingly, the papers do not explicitly treat it as evidence of a named construct.

## Sources

**[PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training](https://proceedings.iclr.cc/paper_files/paper/2024/file/524ef58c2bd075775861234266e5e020-Paper-Conference.pdf)**
> Generating correct answers to multiple-choice questions without any task-specific training examples provided in context.

**[ShiftAddLLM: Accelerating Pretrained LLMs via Post-Training Multiplication-Less Reparameterization](https://proceedings.neurips.cc/paper_files/paper/2024/file/2c30a37c75f062e0bf79297c73db8c6c-Paper-Conference.pdf) (as "Zero-shot Question Answering")**
> The observable behavior of answering questions on downstream tasks without fine-tuning or additional training.

## Relationships

### Zero-shot question answering →
- **BoolQ** (measurements) — *measured_by*
  > For zero-shot evaluation, we employ BoolQ (Clark et al., 2019), PIQA (Bisk et al., 2020), WinoGrande (Keisuke et al., 2019), and TruthfulQA (Lin et al., 2022). (Section 5.4)
  - [PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training](https://proceedings.iclr.cc/paper_files/paper/2024/file/524ef58c2bd075775861234266e5e020-Paper-Conference.pdf)
- **PIQA** (measurements) — *measured_by*
  > For zero-shot evaluation, we employ BoolQ (Clark et al., 2019), PIQA (Bisk et al., 2020), WinoGrande (Keisuke et al., 2019), and TruthfulQA (Lin et al., 2022). (Section 5.4)
  - [PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training](https://proceedings.iclr.cc/paper_files/paper/2024/file/524ef58c2bd075775861234266e5e020-Paper-Conference.pdf)
- **WinoGrande** (measurements) — *measured_by*
  > For zero-shot evaluation, we employ BoolQ (Clark et al., 2019), PIQA (Bisk et al., 2020), WinoGrande (Keisuke et al., 2019), and TruthfulQA (Lin et al., 2022). (Section 5.4)
  - [PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training](https://proceedings.iclr.cc/paper_files/paper/2024/file/524ef58c2bd075775861234266e5e020-Paper-Conference.pdf)
- **HellaSwag** (measurements) — *measured_by*
  > “accuracies of zero-shot tasks including Winogrande [29], HellaSwag [41], PIQA [4], BoolQ [7], and ARC [8] are also reported.”
  - [OneBit: Towards Extremely Low-bit Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a7a3f53faafc0161be0fcb57e5fa078-Paper-Conference.pdf)
- **lm-evaluation-harness** (measurements) — *measured_by*
  > To verify the effectiveness and generalizability, we perform extensive evaluation of our models on 7 zero-shot tasks. We employ a set of seven tasks sourced from the EleutherAI LM Harness [50]. (Section 7.1).
  - [Discovering Sparsity Allocation for  Layer-wise Pruning of Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/ff997469ac66cf893c4183efeb22212a-Paper-Conference.pdf)
- **ARC** (measurements) — *measured_by*
  > “accuracies of zero-shot tasks including Winogrande [29], HellaSwag [41], PIQA [4], BoolQ [7], and ARC [8] are also reported.”
  - [OneBit: Towards Extremely Low-bit Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/7a7a3f53faafc0161be0fcb57e5fa078-Paper-Conference.pdf)
- **ARC-Easy** (measurements) — *measured_by*
  > "we evaluate our method and other methods on five well-known zero-shot tasks: PIQA [4]; WinoGrande [33]; HellaSwag [45]; ARC-e and ARC-c [6]."
  - [DISP-LLM: Dimension-Independent Structural Pruning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/84a7fc24ed52e8eff514c33e8ac76ea3-Paper-Conference.pdf)
- **ARC-Challenge** (measurements) — *measured_by*
  > "we evaluate our method and other methods on five well-known zero-shot tasks: PIQA [4]; WinoGrande [33]; HellaSwag [45]; ARC-e and ARC-c [6]."
  - [DISP-LLM: Dimension-Independent Structural Pruning for Large Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/84a7fc24ed52e8eff514c33e8ac76ea3-Paper-Conference.pdf)
- **OpenBookQA** (measurements) — *measured_by*
  > Moreover, we also evaluate the accuracy for 7 zero-shot QA datasets: ARC-c (Clark et al., 2018), ARC-e (Clark et al., 2018), BoolQ (Clark et al., 2019), Hellaswag (Zellers et al., 2019), OBQA (Mihaylov et al., 2018), PIQA (Bisk et al., 2020), and Winogrande (Sakaguchi et al., 2020). (Section 4.1)
  - [ARB-LLM: Alternating Refined Binarizations for Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea5ffdf7da91256ecd2770f9fd2dade9-Paper-Conference.pdf)
- **MMLU** (measurements) — *measured_by*
  > We evaluate quantized LLMs using ... zero-shot accuracy on the benchmarks ARC (Clark et al., 2018), LAMBADA (Paperno et al., 2016), MMLU (Hendrycks et al., 2020), HellaSwag (Zellers et al., 2019), PIQA (Bisk et al., 2020), and WinoGrande (Sakaguchi et al., 2021) (Section 4).
  - [LeanQuant: Accurate and Scalable Large Language Model Quantization with Loss-error-aware Grid](https://proceedings.iclr.cc/paper_files/paper/2025/file/57ccc284de6f060c8dcde8f9352f70a5-Paper-Conference.pdf)
