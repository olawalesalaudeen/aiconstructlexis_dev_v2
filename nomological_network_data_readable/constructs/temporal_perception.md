# Temporal perception
**Type:** Construct  
**Referenced in:** 4 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the definitions, temporal perception is most commonly framed as recognizing and processing information distributed across the time dimension of a video. A narrower formulation describes it as the latent ability of a model to perceive and understand dynamic visual changes over time, especially rapid or subtle motion patterns in video sequences. The common ground is attention to temporally distributed video information, while the main difference is scope: broad time-dimension processing versus a more motion-focused account.

**Space of facets.** The clearest systematization groups temporal perception with chronological ordering and spatio-temporal coherence as three aspects of video understanding, rather than treating it as a synonym for either of the other two. In that usage, it is evaluated within the same benchmark framework that also includes retrieval, ordering, and counting tasks. No other constructs are linked to it.

**Space of measurement.** Papers link temporal perception to 1 measurement instrument and 1 behavioral indicator. The instrument is VNBench, described as a video benchmark that includes retrieval, ordering, and counting to evaluate temporal perception together with chronological ordering and spatio-temporal coherence. At the indicator level, Synthetic recall operationalizes it through the retrieval task, which is described as specifically assessing the model's capability for temporal perception and understanding across the time dimension, using the same time-dimension language as the broader definition.

## Sources

**[Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)**
> The ability to recognize and process information distributed across the time dimension of a video.

## Relationships

### Temporal perception →
- **VNBench** (measurements) — *measured_by*
  > Utilizing VideoNIAH, we compile a video benchmark, VNBench, which includes tasks such as retrieval, ordering, and counting to evaluate three key aspects of video understanding: temporal perception, chronological ordering, and spatio-temporal coherence. (ABSTRACT)
  - [Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)

### Associated with
- **Synthetic recall** (behaviors tasks)
  > This task [Retrieval] specifically assesses the model’s capability for temporal perception and understanding across the time dimension. (Section 3.2)
  - [Needle In A Video Haystack: A Scalable  Synthetic Evaluator for Video MLLMs](https://proceedings.iclr.cc/paper_files/paper/2025/file/f7b77476d89d5fb58aeb77691d2f40f5-Paper-Conference.pdf)
