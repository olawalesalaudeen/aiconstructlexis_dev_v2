# OLMES
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Papers treat OLMES as an evaluation suite for language models. One definition describes it as combining multiple-choice and cloze-format tasks across knowledge and reasoning domains, with manually curated in-context examples and calibration methods to improve reliability. Task lists vary slightly across papers: one lists MMLU, ARC-Easy, ARC-Challenge, and CommonsenseQA, among others, while another describes OLMES as a suite of 10 multiple choice question answering benchmarks and includes BoolQ.

**What it is claimed to measure.** The recorded measurement claims converge on one behavioral indicator: papers use OLMES to measure Multiple-choice question answering. It is linked to 1 behavioral indicator and no constructs. Papers also link it to 10 benchmark instruments that are presented as parts of the suite, including ARC-Challenge, ARC-Easy, BoolQ, CommonsenseQA, and HellaSwag, with 5 other instruments linked as well.

**Space of uses.** In use, papers say they adopt or use OLMES for evaluation. Metadata Conditioning Accelerates Language Model Pre-training states that it adopts the OLMES suite for evaluation, and another paper uses it as a suite of 10 multiple choice question answering benchmarks. The benchmarks shown alongside it include ARC-Challenge, ARC-Easy, BoolQ, CommonsenseQA, and HellaSwag, plus 5 other linked instruments.

## Sources

**[Metadata Conditioning Accelerates Language Model Pre-training](https://raw.githubusercontent.com/mlresearch/v267/main/assets/gao25p/gao25p.pdf)**
> Evaluation suite for language models that includes multiple-choice and cloze-format tasks across knowledge and reasoning domains, using manually curated in-context examples and calibration methods to improve reliability.

## Relationships

### → OLMES
- **Multiple-choice question answering** (behaviors tasks) — *measured_by*
  > We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024)... (Section 2.4)
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)

### Associated with
- **MMLU** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): MMLU ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **HellaSwag** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): MMLU (Hendrycks et al., 2021), HellaSwag (Zellers et al., 2019), ARC Challenge ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **ARC-Challenge** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): MMLU ... ARC Challenge (Clark et al., 2018), ARC Easy ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **ARC-Easy** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): MMLU ... ARC Easy (Clark et al., 2018), PIQA ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **PIQA** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... PIQA (Bisk et al., 2020), CommonsenseQA ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **CommonsenseQA** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... CommonsenseQA (Talmor et al., 2019), SocialIQA ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **SIQA** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... SocialIQA (Sap et al., 2019), OpenBookQA ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **OpenBookQA** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... OpenBookQA (Mihaylov et al., 2018), BoolQ ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **BoolQ** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... BoolQ (Clark et al., 2019), and WinoGrande ..."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
- **WinoGrande** (measurements)
  > "We use the OLMES suite of 10 multiple choice question answering benchmarks (Gu et al., 2024): ... BoolQ (Clark et al., 2019), and WinoGrande (Sakaguchi et al., 2020)."
  - [DataDecide: How to Predict Best Pretraining Data with Small Experiments](https://raw.githubusercontent.com/mlresearch/v267/main/assets/magnusson25a/magnusson25a.pdf)
