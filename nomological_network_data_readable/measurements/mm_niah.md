# MM-NIAH
**Type:** Measurement  
**Referenced in:** 3 papers  

## State of the Field

**What it is.** Across papers, MM-NIAH is described as a benchmark for long multimodal or mixed-modality haystacks in which needles of information are embedded and the model must locate or comprehend them. One framing presents it as a mixed video-text retrieval benchmark, with text segments inserted across different frames in long-video inputs, 25% of the input made up of these inserted text segments, and input lengths reaching 4.5k frames, or about 1.1M tokens. Another framing presents it as a benchmark for long multimodal documents of interleaved text and images, with retrieval, counting, and reasoning tasks.

**What it is claimed to measure.** Across papers, MM-NIAH is linked as measuring 3 constructs and 1 behavioral indicator. The constructs are long-context multimodal understanding, long-context understanding, and multimodal reasoning, and the behavioral indicator is synthetic recall. In the papers' own terms, it is used to systematically evaluate comprehension of long multimodal documents, through retrieval, counting, and reasoning tasks, and to detect image or text needles within hybrid long contexts.

**Space of uses.** Papers position MM-NIAH both as a benchmark introduced for mixed-modality or long-document evaluation and as a selected evaluation within broader model studies. One reported use describes constructing a mix-modality version of NIAH to evaluate VLMs in mixed-modality scenarios, while another selects MM-NIAH to detect image and text needles within hybrid long contexts. The only linked instrument is BLINK, which one paper uses as a source of image needles by inserting images sampled from its Jigsaw and Multi-view reasoning split into the document.

## Sources

**[MMInference: Accelerating Pre-filling for Long-Context Visual Language Models via Modality-Aware Permutation Sparse Attention](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25aq/li25aq.pdf)**
> Mixed-Modality Needle in a Haystack, a retrieval benchmark for mixed video-text inputs in which text segments are inserted across frames and the model must locate relevant content.

## Relationships

### → MM-NIAH
- **Synthetic recall** (behaviors tasks) — *measured_by*
  > Our benchmark includes three types of evaluation tasks: multimodal retrieval, counting, and reasoning. (Abstract)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Long-context multimodal understanding** (constructs) — *measured_by*
  > In this work, we present Needle In A Multimodal Haystack (MM-NIAH), the first benchmark specifically designed to systematically evaluate the capability of existing MLLMs to comprehend long multimodal documents. (Abstract)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Multimodal reasoning** (constructs) — *measured_by*
  > Our benchmark includes three types of evaluation tasks: multimodal retrieval, counting, and reasoning. (Abstract)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)

### Associated with
- **BLINK** (measurements)
  > for each evaluation data, images sampled from the Jigsaw and Multi-view reasoning split of BLINK benchmark [26] are inserted into the document to serve as the image needle. (Section 3.2)
  - [Needle In A Multimodal Haystack](https://proceedings.neurips.cc/paper_files/paper/2024/file/24a8968affe71ffe4067d022b9d16566-Paper-Datasets_and_Benchmarks_Track.pdf)
