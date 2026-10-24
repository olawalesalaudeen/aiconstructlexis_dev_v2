# WizardLM
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across the papers, the prevailing description treats WizardLM as a benchmark or evaluation dataset for instruction-oriented, open-ended tasks. One recurring definition presents it as containing 218 questions that span more categories and diverse difficulties, used to assess broader question-type generalization. Papers also describe it differently: one frames it as a benchmark for instruction-following and open-ended generation using complex, multi-step prompts, while another describes it as instruction-generation data that leverages the ChatGPT API to generate 250k instructions from Alpaca training data.

**What it is claimed to measure.** Papers use WizardLM to measure 1 behavioral indicator, Text generation, and link it to no constructs. The reported measurement claim converges on that single target: it is presented as part of evaluating "open-ended generation."

**Space of uses.** In use, papers place WizardLM within broader evaluation suites and as a baseline against prior resources. One paper includes it alongside Vicuna in a "broad array of out-of-distribution benchmarks" for open-ended generation, and another treats it as a previous-work baseline alongside SELF-INSTRUCT when comparing discriminative evaluation data.

## Sources

**[Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf)**
> Evaluation dataset containing 218 questions with diverse categories and difficulty levels, used to assess generalization of SoT across broader question types.

## Relationships

### → WizardLM
- **Text generation** (behaviors tasks) — *measured_by*
  > “we employ a broad array of out-of-distribution benchmarks to conduct a more comprehensive evaluation of the model’s capabilities. This includes assessing ... open-ended generation (Vicuna (Chiang et al., 2023) and WizardLM (Xu et al., 2023))”
  - [Beyond Imitation: Leveraging Fine-grained Quality Signals for Alignment](https://proceedings.iclr.cc/paper_files/paper/2024/file/5c8236f62e33b5224634069e64cb271a-Paper-Conference.pdf)
