# Clotho
**Type:** Measurement  
**Referenced in:** 8 papers  

## State of the Field

**What it is.** Across papers, the prevailing usage treats Clotho as an audio captioning dataset or benchmark, though one definition also frames it as a benchmark for audio-retrieval tasks. Definitions consistently describe paired audio and text data: audio clips with natural-language captions, with some papers adding that it contains long, diverse soundscapes, is human annotated, and is composed of FreeSound samples. A more detailed description gives 6,000 clips of 15 to 30 seconds with five captions per clip, and another paper likewise describes each sample as having five different captions. A smaller usage refers to Clotho Caps, and one retrieval study explicitly uses the original, non-spatial version.

**What it is claimed to measure.** Papers link Clotho to one construct and two behavioral indicators. The prevailing claim is that it measures Audio captioning, with several papers evaluating models on Clotho for audio captioning tasks; a smaller line of work uses it to measure Cross-modal retrieval through semantic retrieval scores such as R@1, R@5, and R@10. One paper also reports that Clotho measures Generalization, stating that a model trained solely on AudioSet’s audio excerpts and images may encounter unfamiliar concepts in Clotho, thereby testing its capacity for generalization.

**Space of uses.** In use, papers commonly place Clotho alongside AudioCaps, and one result table also groups it with MusicCaps. Authors position it as a standard automated audio captioning benchmark, sometimes as a primary benchmark, and elsewhere as part of a multimodal evaluation suite or as a dataset for evaluating zero-shot generation of textual descriptions from audio clips. Papers do not link it to another measurement instrument.

**Concerns raised.** One paper says it is easy for audio-language models to perform well on Clotho and Audio-Caps when discussing commonly used audio-retrieval benchmarks. Another notes that a model trained solely on AudioSet’s audio excerpts and images may encounter unfamiliar concepts in Clotho, thereby testing its capacity for generalization.

## Sources

**[CompA: Addressing the Gap in Compositional Reasoning in Audio-Language Models](https://proceedings.iclr.cc/paper_files/paper/2024/file/43c18853329c7504996b255252b6cb1f-Paper-Conference.pdf)**
> A benchmark dataset used for evaluating audio-retrieval tasks, consisting of audio clips and their corresponding text captions.

## Relationships

### → Clotho
- **Audio captioning** (behaviors tasks) — *measured_by*
  > We evaluate our proposed approach on two popular and publicly available human-annotated audio captioning datasets: AudioCaps and Clotho (Tampere University licence), using conventional audio captioning metrics. (Section 4)
  - [An eye for an ear: zero-shot audio description leveraging an image captioner with audio-visual token distribution matching](https://proceedings.neurips.cc/paper_files/paper/2024/file/4426af45e987692abf1b80108951ff8a-Paper-Conference.pdf)
- **Generalization** (constructs) — *measured_by*
  > Consequently, our model, having been trained solely on AudioSet’s audio excerpts and images, may encounter unfamiliar concepts in Clotho, thereby testing its capacity for generalization. (Section 4)
  - [An eye for an ear: zero-shot audio description leveraging an image captioner with audio-visual token distribution matching](https://proceedings.neurips.cc/paper_files/paper/2024/file/4426af45e987692abf1b80108951ff8a-Paper-Conference.pdf)
- **Cross-modal retrieval** (behaviors tasks) — *measured_by*
  > “Table 3: Semantic retrieval (R@1, R@5, and R@10) for CLAP and ELSA calculated over the original (non-spatial) versions of Clotho and AudioCaps.”
  - [Learning Spatially-Aware Language and Audio Embeddings](https://proceedings.neurips.cc/paper_files/paper/2024/file/3acc054949b6948d4444b35d412cab56-Paper-Conference.pdf)
