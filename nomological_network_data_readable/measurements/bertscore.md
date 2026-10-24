# BERTScore
**Type:** Measurement  
**Referenced in:** 50 papers  
**Also known as:** BERTSCORE, BertScore, BERT-Score, BERT-SCORE, BERTScore-F1, Bert-Score  

## State of the Field

Across the provided data, BERTScore is consistently described as a reference-based, embedding-driven metric for evaluating semantic similarity between a candidate and a reference text. The prevailing operationalization involves computing token-level similarity using contextual embeddings from BERT, with several sources specifying the use of cosine similarity or the F1 score variant. Papers use this instrument to measure a range of constructs and task outcomes, including the quality of text summarization, relevance, faithfulness, semantic preservation in paraphrase generation, and the quality of radiology report generation. It is frequently positioned as a semantic or contextual evaluation metric, often used alongside or as a more nuanced alternative to overlap-based metrics like ROUGE and BLEU, and is noted in some sources to correlate with human judgments. While its dominant application is evaluating text generation, a smaller line of work treats it as a "model-agnostic attribution procedure" for assessing demonstration relevance in in-context learning. The metric is also studied in relation to other model-based approaches, with one paper citing that BARTScore outperforms it. The applications cited are diverse, spanning machine translation, dialogue summarization, and the evaluation of generated lyrics and code review comments.

## Sources

**[Does Writing with Language Models Reduce Content Diversity?](https://proceedings.iclr.cc/paper_files/paper/2024/file/02dec8877fb7c6aa9a79f81661baca7c-Paper-Conference.pdf) (as "BertScore")**
> Embedding-based metric that evaluates text similarity using contextual embeddings, used to measure homogenization across essays.

**[MT-Ranker: Reference-free machine translation evaluation by inter-system ranking](https://proceedings.iclr.cc/paper_files/paper/2024/file/dbd6b295535e44f2b8ec0c3f1da7c509-Paper-Conference.pdf) (as "BERTSCORE")**
> A reference-based, unsupervised evaluation metric that measures the similarity between a candidate and reference translation using contextual embeddings from BERT.

**[DETAIL: Task DEmonsTration Attribution for Interpretable In-context Learning](https://proceedings.neurips.cc/paper_files/paper/2024/file/2ceda49041816da6d5a34eb3b612607f-Paper-Conference.pdf) (as "BERT-Score")**
> A model-agnostic attribution procedure that uses similarity scores from a pre-trained sentence transformer (BERT) to evaluate demonstration relevance, used as a baseline.

**[PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)**
> A semantic similarity metric that evaluates non-clinical sentence-level similarity between generated and reference radiology reports using contextual embeddings.

**[Does Liking Yellow Imply Driving a School Bus? Semantic Leakage in Language Models](https://aclanthology.org/2025.naacl-long.35.pdf) (as "BERT-SCORE")**
> Automatic evaluation metric that computes token-level similarity between texts using contextual embeddings, used here to measure semantic similarity in the Leak-Rate calculation.

**[Hybrid Graphs for Table-and-Text based Question Answering using LLMs](https://aclanthology.org/2025.naacl-long.39.pdf) (as "BERTScore-F1")**
> Semantic evaluation metric that uses contextual embeddings from BERT to compute similarity between predicted and reference answers, providing a more nuanced assessment than exact string matching.

**[Not all Hallucinations are Good to Throw Away When it Comes to Legal Abstractive Summarization](https://aclanthology.org/2025.naacl-long.275.pdf) (as "Bert-Score")**
> A contextual metric that evaluates summary quality by comparing contextual embeddings of sentences between generated and reference summaries.

## Relationships

### → BERTScore
- **Relevance** (constructs) — *measured_by*
  > "We evaluate the summary quality in relevance, coherence, factual consistency, and text compression using BertScore (Zhang et al., 2020b), HHEM-2.1-Open (Vectara, 2024), and summary length."
  - [Evaluating Small Language Models for News Summarization: Implications and Factors Influencing Performance](https://aclanthology.org/2025.naacl-long.253.pdf)
- **Coherence** (constructs) — *measured_by*
  > "We evaluate the summary quality in relevance, coherence, factual consistency, and text compression using BertScore (Zhang et al., 2020b), HHEM-2.1-Open (Vectara, 2024), and summary length."
  - [Evaluating Small Language Models for News Summarization: Implications and Factors Influencing Performance](https://aclanthology.org/2025.naacl-long.253.pdf)
- **Paraphrasing** (behaviors tasks) — *measured_by*
  > "Semantic equivalence →BERTScore (Zhang et al., 2019a)"
  - [PlagBench: Exploring the Duality of Large Language Models in Plagiarism Generation and Detection](https://aclanthology.org/2025.naacl-long.384.pdf)
- **Fluency** (constructs) — *measured_by*
  > “We use BLEU (Papineni et al., 2002), BERTScore (Zhang et al., 2020), and COMET (Rei et al., 2020) as standard evaluation metrics for translation tasks.”
  - [Large Language Models for Persian-English Idiom Translation](https://aclanthology.org/2025.naacl-long.405.pdf)
- **Radiology report generation** (behaviors tasks) — *measured_by*
  > Since we have radiologist-written reference available, it is possible to employ standard, general domain, NLG metrics such as BLEU (Papineni et al., 2002), ROUGE (Lin, 2004), and the BERTScore (Zhang et al., 2019). (Section 3.2)
  - [CheXalign: Preference fine-tuning in chest X-ray interpretation models without human feedback](https://aclanthology.org/2025.acl-long.1342.pdf)
- **Text summarization** (behaviors tasks) — *measured_by*
  > "Similarity with those expert solutions can be measured through metrics such as ROUGE (Lin, 2004) and BERTScore (Zhang et al., 2019), and be employed for scoring the LLM generations."
  - [Can RLHF be More Efficient with Imperfect Reward Models? A Policy Coverage Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/huang25o/huang25o.pdf)
- **Semantic preservation** (constructs) — *measured_by*
  > The semantic dimension evaluates the extent to which a generated claim preserves the intended meaning and technical context of the original. We adopt BERTScore (MBS), which measures semantic similarity using contextual embeddings, due to its robustness in capturing meaning beyond lexical overlap.
  - [PatentScore: Multi-dimensional Evaluation of LLM-Generated Patent Claims](https://aclanthology.org/2025.emnlp-main.1564.pdf)

### Associated with
- **BARTScore** (measurements)
  > It has been shown that BARTScore outperforms other metrics such as BERTScore and BLEURT (Yuan et al., 2021) (Section 3.1).
  - [Learning to Substitute Words with Model-based Score Ranking](https://aclanthology.org/2025.naacl-long.576.pdf)
- **Human evaluation** (measurements)
  > “As the BertScore [86] is shown to correlate with human evaluation, we ﬁrst present the Bert- score precision, recall, and F1 scores”
  - [A Hitchhiker's Guide to Fine-Grained Face Forgery Detection Using Common Sense Reasoning](https://proceedings.neurips.cc/paper_files/paper/2024/file/059d2b9188cdb7ae00f4d78cc9469704-Paper-Datasets_and_Benchmarks_Track.pdf)
