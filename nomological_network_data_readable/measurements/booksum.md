# BookSum
**Type:** Measurement  
**Referenced in:** 5 papers  
**Also known as:** Booksum  

## State of the Field

**What it is.** Across the papers, BookSum is most commonly described as a benchmark dataset for book or long-form narrative summarization on long inputs. The descriptions differ on granularity and content: some papers frame it as evaluating summaries of entire books, others call it a collection of datasets for long-form narrative summarization over novels, plays, and stories, and another describes each example as a book chapter paired with a summary of that chapter’s content.

**What it is claimed to measure.** Papers use BookSum to measure Text summarization, and it is linked to one behavioral indicator in total. No constructs are linked to it, so the reported measurement claims are concentrated on summarization rather than spread across multiple constructs.

**Space of uses.** Papers use BookSum as a standalone evaluation dataset rather than alongside other linked measurement instruments. In the available descriptions, it is used to assess long-context and long-response generation capabilities, to evaluate models on a book summarization dataset, and to evaluate takedown methods in the books domain.

## Sources

**[A Training-Free Sub-quadratic Cost Transformer Model Serving Framework with Hierarchically Pruned Attention](https://proceedings.iclr.cc/paper_files/paper/2025/file/043f0503c4f652c737add3690aa5d12c-Paper-Conference.pdf)**
> A benchmark dataset for evaluating the ability of models to generate summaries of entire books.

**[Training Free Exponential Context Extension via Cascading KV Cache](https://proceedings.iclr.cc/paper_files/paper/2025/file/19a567abaec3990cb40d7a013556fecd-Paper-Conference.pdf) (as "Booksum")**
> A dataset for evaluating book summarization capabilities on long input texts.

## Relationships

### → BookSum
- **Text summarization** (behaviors tasks) — *measured_by*
  > BookSum [33] is a collection of datasets for long-form narrative summarization, including novels, plays, and stories (Section 4.1).
  - [Chain of Agents: Large Language Models Collaborating on Long-Context Tasks](https://proceedings.neurips.cc/paper_files/paper/2024/file/ee71a4b14ec26710b39ee6be113d7750-Paper-Conference.pdf)
