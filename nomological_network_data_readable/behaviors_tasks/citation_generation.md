# Citation generation
**Type:** Behavior  
**Referenced in:** 22 papers  
**Also known as:** Reference generation, Block-level citation, Page-level citation, Image-referenced answering, Generation with citations, Sentence-level citation generation, Chunk-level citation generation, Attribution, Attributed text generation  

## State of the Field

**Space of definitions.** Across papers, the prevailing usage treats this behavior as generating an answer together with explicit source support for its content, usually attached to each sentence, statement, or claim. Papers commonly require references to source documents, passages, chunks, or sentences so that each claim is supported by cited material, and some definitions add that irrelevant citations should be avoided. A broader framing also counts quotes, URLs, or extracted context as the supporting output.

**Variants.** Papers study several granularities and modalities. A recurrent distinction is between fine-grained sentence or claim level citation, where each response statement is followed by a citation sequence or passage ID, and chunk-level citation, where larger text blocks such as short paragraphs are cited instead. Other variants require citing the correct source page, marking a precise block with a bounding box, or explicitly naming the referenced image in the answer. A smaller line treats the behavior as producing full academic references with metadata, parenthetical author-date citations, or numbered attributions that map generated text to input triplets.

**Space of elicitation and scores.** No measurement instrument is linked to it in these papers. Papers operationalize it directly through the required output format, for example citations after each sentence or statement, both statements and supporting evidence, or page, block, or image references in multimodal settings.

**What it is taken as evidence of.** Papers link it to two constructs, but not in a single common way. One paper claims a causal relationship from citation generation to Fidelity, reporting that responses with citation can boost fidelity, while another paper treats citation generation as related to Political bias by analyzing political leaning in generated citations.

## Sources

**[AttriBoT: A Bag of Tricks for Efficiently Approximating Leave-One-Out Context Attribution](https://proceedings.iclr.cc/paper_files/paper/2025/file/2aab664e0d1656e8b56c74f868e1ea69-Paper-Conference.pdf)**
> Producing citations, quotes, URLs, or extracted context intended to support a generated response.

**[Large Language Models for Automated Literature Review: An Evaluation of Reference Generation, Abstract Writing, and Review Composition](https://aclanthology.org/2025.emnlp-main.83.pdf) (as "Reference generation")**
> Producing a list of academic citations with full metadata (title, authors, journal, year, etc.) based on a given research topic.

**[FinRAGBench-V: A Benchmark for Multimodal RAG with Visual Citation in the Financial Domain](https://aclanthology.org/2025.emnlp-main.211.pdf) (as "Page-level citation")**
> The specific behavior of identifying and outputting a reference to the correct source page that contains evidence for a generated answer.

**[FinRAGBench-V: A Benchmark for Multimodal RAG with Visual Citation in the Financial Domain](https://aclanthology.org/2025.emnlp-main.211.pdf) (as "Block-level citation")**
> The specific behavior of identifying and outputting coordinates for a bounding box around the precise region within a source page that contains evidence for a generated answer.

**[Learning Interleaved Image-Text Comprehension in Vision-Language Large Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/b441276ce6097177f1c001b3ea643f7a-Paper-Conference.pdf) (as "Image-referenced answering")**
> The observable behavior of explicitly citing a specific image from the input context within a generated answer, often using a standardized format like '[Picture n]'.

**[HELMET: How to Evaluate Long-context Models Effectively and Thoroughly](https://proceedings.iclr.cc/paper_files/paper/2025/file/f5332c8273d02729730a9c24dec2135e-Paper-Conference.pdf) (as "Generation with citations")**
> The task of generating a long-form answer to a multi-faceted question and correctly attributing each sentence to the source passages provided in the context.

**[SelfCite: Self-Supervised Alignment for Context Attribution in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chuang25a/chuang25a.pdf) (as "Sentence-level citation generation")**
> Producing citations after individual response statements that reference specific sentences from the provided context.

**[SelfCite: Self-Supervised Alignment for Context Attribution in Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chuang25a/chuang25a.pdf) (as "Chunk-level citation generation")**
> The behavior of citing larger blocks of text, such as paragraphs, as evidence for a generated statement.

**[Evaluating and Improving Graph to Text Generation with Large Language Models](https://aclanthology.org/2025.naacl-long.513.pdf) (as "Attribution")**
> Marking segments of generated text with sequential numbers that correspond to specific input triplets to indicate source grounding.

**[Think&Cite: Improving Attributed Text Generation with Self-Guided Tree Search and Progress Reward Modeling](https://aclanthology.org/2025.acl-long.490.pdf) (as "Attributed text generation")**
> The task of generating text that includes in-text citations to a provided corpus as supporting evidence for its statements.

## Relationships

### Citation generation →
- **Fidelity** (constructs) — *causes*
  > we can find that model response with citation can boost both the model performance and its fidelity. (Section 5.2)
  - [$\textitL-CiteEval$: A Suite for Evaluating Fidelity of Long-context Models](https://aclanthology.org/2025.acl-long.263.pdf)

### Associated with
- **Political bias** (constructs)
  > this paper focuses on empirically quantifying and analyzing the political leaning of LLM in citation generation. (Section 2)
  - [Media Source Matters More Than Content: Unveiling Political Bias in LLM-Generated Citations](https://aclanthology.org/2025.emnlp-main.872.pdf)
