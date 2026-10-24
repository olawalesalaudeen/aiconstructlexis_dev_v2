# News summarization
**Type:** Behavior  
**Referenced in:** 4 papers  

## State of the Field

**Space of definitions.** Across the papers that define it, news summarization is treated as producing a concise, shorter summary of a news article. The common success criterion is that the shorter output retain the article's main ideas or essential information, and one formulation makes the setup explicit by stating that the model receives both a prompt and the original article. One prompt example asks for, "Summarize the news in two sentences. Summary:".

**Variants.** Papers mostly use the term for a general article-to-summary task, but they study it in several settings. One paper evaluates it as a zero-shot generative task, another frames it as prompt-based summarization from an article, one prompt formulation constrains the output to two sentences, and one linked resource places news summarization inside a retrieval-augmented generation setup as one of three task types. At least one use is specifically the English summarization subset of XLSum.

**Space of elicitation and scores.** Papers link news summarization to three measurement instruments: CNN/DailyMail, RAGTruth, and XLSum. CNN/DailyMail is used for evaluating zero-shot generative performance, XLSum appears as an English summarization subset, and RAGTruth includes news summarization as one of three task types in its data. Two of these instruments are explicitly described as datasets, while the third is described as task data.

**What it is taken as evidence of.** Papers seldom connect this behavior to broader constructs. The only linked construct is Model collapse, and it appears through a measured_by relation: one paper states that using the same amount of synthesized data can yield worse performance than using the original data, "indicating model collapse." No other construct is linked.

## Sources

**[Progressive Mixed-Precision Decoding for Efficient LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df4313ecd4875931fbdacc486cc1fcf-Paper-Conference.pdf)**
> The task of generating a concise summary of a news article.

## Relationships

### News summarization →
- **RAGTruth** (measurements) — *measured_by*
  > The data includes three RAG task types: Question Answering (QA), Data-to-Text Writing, and News Summarization.
  - [ReDeEP: Detecting Hallucination in Retrieval-Augmented Generation via Mechanistic Interpretability](https://proceedings.iclr.cc/paper_files/paper/2025/file/7daf60e805e596c3bd1e843e72ea5560-Paper-Conference.pdf)
- **XLSum** (measurements) — *measured_by*
  > We utilize the English summarization subset of the XLSUM dataset (Hasan et al., 2021)
  - [Beyond Model Collapse: Scaling Up with Synthesized Data Requires Verification](https://proceedings.iclr.cc/paper_files/paper/2025/file/df2d62b96a4003203450cf89cd338bb7-Paper-Conference.pdf)
- **CNN/DailyMail** (measurements) — *measured_by*
  > We conducted experiments on edge-deployable models... evaluating their zero-shot generative performance on news summarization... using the CNN/DM... dataset (Section 5)
  - [Progressive Mixed-Precision Decoding for Efficient LLM Inference](https://proceedings.iclr.cc/paper_files/paper/2025/file/5df4313ecd4875931fbdacc486cc1fcf-Paper-Conference.pdf)

### Associated with
- **Model collapse** (constructs)
  > We experiment with practical tasks – computing matrix eigenvalues with transformers and news summarization with LLMs – which both exhibit model collapse when trained on generated data
  - [Beyond Model Collapse: Scaling Up with Synthesized Data Requires Verification](https://proceedings.iclr.cc/paper_files/paper/2025/file/df2d62b96a4003203450cf89cd338bb7-Paper-Conference.pdf)
