# FineWeb
**Type:** Measurement  
**Referenced in:** 10 papers  

## State of the Field

**What it is.** Across papers, FineWeb is most commonly described as a web-text corpus or LLM pretraining dataset. Definitions present it as a corpus for analyzing bilinear transformer feature interactions at different model sizes, a high-quality dataset used to generate prompts for base LLMs, and a large corpus of deduplicated English web documents used for negative log-likelihood evaluation. Some papers also work with study-specific variants or subsets, including 'two FineWeb models with 12 and 16 layers' ('fw-small' and 'fw-medium') and a 10k-example sample from the corpus.

**What it is claimed to measure.** Papers use FineWeb to measure one construct, Generalization, and two behavioral indicators, Text continuation and Text generation. The linked claims are distributed across these uses: one paper employs the FineWeb dataset during pre-training for Text continuation, another uses prompts from FineWeb to synthesize new texts for Text generation, and another reports evaluating a model on FineWeb as one of several datasets for Generalization.

**Space of uses.** Papers position FineWeb in several roles rather than as a single fixed evaluation protocol. It appears as pretraining data, as a prompt source for generating new texts, as a corpus from which a 10k-example dataset is sampled, and as one of several datasets used in evaluation. One paper also uses it to evaluate negative log-likelihood and reports that 'quantization errors of different methods are strongly correlated on the FineWeb.' No other measurement instrument is linked to it directly.

## Sources

**[Bilinear MLPs enable weight-based mechanistic interpretability](https://proceedings.iclr.cc/paper_files/paper/2025/file/7504142a20a3e1fe9dd7de42f475828c-Paper-Conference.pdf)**
> A web-text corpus used for analyzing bilinear transformer feature interactions at different model sizes.

## Relationships

### → FineWeb
- **Generalization** (constructs) — *measured_by*
  > In this section, we will evaluate our model, previously trained on the C4 dataset, on various other datasets, including Anthropic HH-RLHF (HH), Synthetic instruction2(Instruct), PKU SafeRLHF (PKU), Reward3, UltraFeedback(UltraF), FineWeb (Penedo et al., 2024) and Pile uncopyrighted(Pile)4 datasets. (Section 4.4)
  - [Robust Multi-bit Text Watermark with LLM-based Paraphrasers](https://raw.githubusercontent.com/mlresearch/v267/main/assets/xu25k/xu25k.pdf)
