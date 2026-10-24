# BLEURT
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

Across the provided literature, BLEURT is consistently defined as a learned, reference-based evaluation metric for text generation. It is widely used to measure constructs such as `Translation quality` and `Faithfulness`, with some papers specifying its role in gauging "semantic relevance and fluency" or "fluency and adequacy". While often used for general evaluation, some work applies it in more specific contexts, such as a utility function for MBR decoding where it is reported to "significantly outperform[s] beam search decoding" ("MBR and QE Finetuning: Training-time Distillation of the Best and Most Expensive Decoding Methods"). Another specific application is to judge whether a generated text is semantically closer to a correct reference than an incorrect one. In evaluation setups, BLEURT is frequently used in conjunction with other metrics like ROUGE-L, COMET, and BLEU. The provided papers also note the use of specific versions, including BLEURT v0.2 and BLEURT-20, and its relation to other metrics like BARTScore.

## Sources

**[MBR and QE Finetuning: Training-time Distillation of the Best and Most Expensive Decoding Methods](https://proceedings.iclr.cc/paper_files/paper/2024/file/ae817e85f71ef86d5c9566598e185b89-Paper-Conference.pdf)**
> A learned, reference-based evaluation metric for text generation, used in this paper as a utility function for MBR decoding and as an evaluation metric.

## Relationships

### → BLEURT
- **General ability** (constructs) — *measured_by*
  > We evaluate our models on six automatic metrics: BLEURT (Sellam et al., 2020), MetricX-XXL (Freitag et al., 2022b), MetricX-23-c (which resembles MetricX-XXL but uses a PaLM-2 backbone; Juraska et al. (2023)), chrF (Popovi´c, 2015), Comet20 (Rei et al., 2020), and Comet22 (Rei et al., 2022). (Section 5.3)
  - [MBR and QE Finetuning: Training-time Distillation of the Best and Most Expensive Decoding Methods](https://proceedings.iclr.cc/paper_files/paper/2024/file/ae817e85f71ef86d5c9566598e185b89-Paper-Conference.pdf)
- **Translation quality** (constructs) — *measured_by*
  > For evaluation, we use MetricX-23 (Juraska et al., 2023), COMET-20 (Rei et al., 2020), and BLEURT (Sellam et al., 2020) as quality metrics.
  - [Learning from others’ mistakes: Finetuning machine translation models with span-level error annotations](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25p/zhang25p.pdf)
- **Truthfulness** (constructs) — *measured_by*
  > “For open-ended text generation tasks, we follow the standard practice (Lin et al., 2021) and utilize two sets of metrics: (1) BLEURT score, which is determined by whether the generated text is closer to correct or incorrect answers, measured by BLEURT model (Sellam et al., 2020)”
  - [TruthFlow: Truthful LLM Generation via Representation Flow Correction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25i/wang25i.pdf)

### Associated with
- **BARTScore** (measurements)
  > It has been shown that BARTScore outperforms other metrics such as BERTScore and BLEURT (Yuan et al., 2021) (Section 3.1).
  - [Learning to Substitute Words with Model-based Score Ranking](https://aclanthology.org/2025.naacl-long.576.pdf)
