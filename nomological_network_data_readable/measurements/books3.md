# Books3
**Type:** Measurement  
**Referenced in:** 6 papers  
**Also known as:** Book3  

## State of the Field

**What it is.** Across the papers, the dominant framing treats Books3 as a large collection of books used as a dataset or benchmark for language model evaluation, especially on long-context or extremely long documents. Definitions describe it as an extensive collection of books, a large-scale dataset of text from a wide variety of books, or a large dataset for long-context sequences, and one paper uses the spelling Book3.

**What it is claimed to measure.** Papers link Books3 to one construct and no behavioral indicators, and the measurement claims converge on length generalization. In that usage, Books3 is reported as measuring length generalization through language modeling evaluations such as perplexity, with one snippet stating that perplexity on Books3 'shows better extrapolation' and another using Books3 among real-world datasets when reporting length generalization gains.

**Space of uses.** Most papers position Books3 as an evaluation dataset or benchmark rather than as a standalone target. It is used alongside PG-19 or Gutenberg in evaluations over book datasets and alongside Arxiv in model-performance experiments, and papers link it to one other measurement instrument, The Pile, through a related relation that describes training on a Books3 subset from the Pile in a data mixture.

**Concerns raised.** Only a smaller line of work foregrounds concerns around memorization and copyrighted material. There, Books3 is described as a source of copyrighted text used to evaluate memorization and data extraction, including copyright-related queries, and the assessment uses a Books3 subset from the Redpajamas dataset.

## Sources

**[PoSE: Efficient Context Window Extension of LLMs via Positional Skip-wise Training](https://proceedings.iclr.cc/paper_files/paper/2024/file/524ef58c2bd075775861234266e5e020-Paper-Conference.pdf)**
> A dataset consisting of an extensive collection of books, used to evaluate model performance on extremely long documents (e.g., 96k-128k tokens).

**[An Efficient Recipe for Long Context Extension via Middle-Focused Positional Encoding](https://proceedings.neurips.cc/paper_files/paper/2024/file/66944d3a3e77ebe366793f6a6126f3a4-Paper-Conference.pdf) (as "Book3")**
> A large dataset of books used for evaluating language modeling performance on long-context sequences.

## Relationships

### → Books3
- **Length generalization** (constructs) — *measured_by*
  > Figure 2: Perplexity of larger bases on Books3 (Presser, 2020) shows better extrapolation.
  - [Scaling Laws of RoPE-based Extrapolation](https://proceedings.iclr.cc/paper_files/paper/2024/file/d33b741600f100b31256c70a46f66ec9-Paper-Conference.pdf)

### Associated with
- **The Pile** (measurements)
  > We train on the mixtures of GitHub, Pile-CC, and Books3 subset from the Pile for a total of 30B tokens (Section 3.2).
  - [Data Mixing Laws: Optimizing Data Mixtures by Predicting Language Modeling Performance](https://proceedings.iclr.cc/paper_files/paper/2025/file/cc84bfabe6389d8883fc2071c848f62a-Paper-Conference.pdf)
