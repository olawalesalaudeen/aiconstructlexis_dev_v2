# HC3
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Human ChatGPT Comparison Corpus (HC3)  

## State of the Field

**What it is.** Across papers, the prevailing usage treats HC3 as a ChatGPT text detection corpus, described as up-to-date, bilingual in English and Chinese, and organized at multiple text lengths, with full or long-text data and sentence-level or short-text variants for multiscale evaluation. Papers explicitly mention the short-text subsets HC3-English-Sent and HC3-Chinese-Sent. A smaller line of work instead frames it as the Human ChatGPT Comparison Corpus, a set of responses or question-and-answer pairs from humans and GPT-3.5 or ChatGPT to the same questions, used to compare their characteristics or for human-AI text discrimination.

**What it is claimed to measure.** Among recorded links, papers use HC3 to measure AI-generated text detection. It is linked to 1 behavioral indicator, AI-generated text detection, and to no constructs, so the recorded measurement claims are concentrated on that single indicator. One paper describes using a learned kernel from HC3 to test unseen HC3 texts "to mimic the MGT-detection."

**Space of uses.** No other measurement instrument is linked to it. Papers position HC3 as an evaluation benchmark or corpus: methods are evaluated on its long or full and short or sentence-level portions, a learned kernel is trained on HC3 and then tested on unseen HC3 texts, one study uses it to validate discovered differences between ChatGPT and human responses, and another trains an encoder on human-generated answers from HC3 before applying it to unseen human and ChatGPT Q&A pairs.

## Sources

**[Detecting Machine-Generated Texts by Multi-Population Aware Optimization for Maximum Mean Discrepancy](https://proceedings.iclr.cc/paper_files/paper/2024/file/e537e071277a2e5fefaa78f87500c7b4-Paper-Conference.pdf)**
> Up-to-date ChatGPT text detection dataset including both English and Chinese, with full and sentence-level (short-text) variants for evaluating multiscale detection performance.

**[VibeCheck: Discover and Quantify Qualitative Differences in Large Language Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/acbfe708197ff78ad04cc1beb1710979-Paper-Conference.pdf) (as "Human ChatGPT Comparison Corpus (HC3)")**
> The Human ChatGPT Comparison Corpus (HC3) is a dataset containing responses from both humans and GPT-3.5 to the same questions, used for comparing their characteristics.

## Relationships

### → HC3
- **AI-generated text detection** (behaviors tasks) — *measured_by*
  > "we use the learned kernel function kω from HC3 to test unseen texts from HC3 to mimic the MGT-detection"
  - [Deep Kernel Relative Test for Machine-generated Text Detection](https://proceedings.iclr.cc/paper_files/paper/2025/file/e124f1547f7ac87e33d348b827d4291b-Paper-Conference.pdf)
