# DCLM
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** The available definition treats DCLM as the pre-training data of the DCLM-7B model, and one paper explicitly uses it as a calibration source. Another paper uses a subset of DCLM and describes DCLM as a high-quality corpus carefully curated with complex pipelines.

**What it is claimed to measure.** Across the linked uses, papers use DCLM to measure Language modeling ability, and this is the only construct tied to it. It is reported as testing language modeling capability on a subset of DCLM, "to examine how well LMs capture broad and diverse knowledge," and no behavioral indicators are linked to it.

**Space of uses.** In the available papers, DCLM is positioned both as calibration data and as an evaluation subset for language modeling tests. No other measurement instrument is linked to it.

## Sources

**[Beware of Calibration Data for Pruning Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/2ede933e10afa991a10b6f36b6522129-Paper-Conference.pdf)**
> The pre-training data of the DCLM-7B model used as a calibration source.

## Relationships

### → DCLM
- **Language modeling ability** (constructs) — *measured_by*
  > We also test the language modeling capability of the LMs on a subset of DCLM (Li et al., 2024a), a high-quality corpus carefully curated with complex pipelines, to examine how well LMs capture broad and diverse knowledge. (Section 3.1)
  - [MiniPLM: Knowledge Distillation for Pre-training Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/ea05e4fc0299c27648c9985266abad47-Paper-Conference.pdf)
- **Language modeling** (behaviors tasks) — *measured_by*
  > We also report the LM’s language modeling loss on a subset of DCLM (Li et al., 2024), a high-quality corpus curated with complex pipelines and human heuristics, to verify that models trained on D′ retain diversity and long-tail knowledge coverage. (Section 3.1)
  - [Data Selection via Optimal Control for Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/9ad4891facabf17aa11580686bacfe4e-Paper-Conference.pdf)
