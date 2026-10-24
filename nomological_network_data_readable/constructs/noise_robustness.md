# Noise robustness
**Type:** Construct  
**Referenced in:** 25 papers  
**Also known as:** Susceptibility to noisy information, Noise Sensitivity, Noise resistance, Reader robustness to noise, Robustness to random noise, Noise sensitivity, Error tolerance, Typo-fixing, Robustness to semantic perturbation, Robustness to noisy feedback, Random-label robustness, Robustness to distractors, Invariance from irrelevant context, Distractibility  

## State of the Field

**Definition agreement:** Consensus. Most papers define noise robustness as the resilience of a model or system's performance or responses when inputs, context, retrievals, labels, feedback, or representations contain noisy, irrelevant, misleading, or corrupted information. A few papers instead phrase it as susceptibility or performance degradation under such noise, and there is an isolated mechanism-level version, but these are minority variants around the same dominant core property.

**Space of definitions.** Across the surveyed work, the dominant framing is a model-side ability to preserve performance or answer quality when inputs or context contain noise, such as corrupted speech inputs, irrelevant or misleading retrieved content, distracting context, or wrong labels in demonstrations. Most papers stay close to this performance-under-noise view, sometimes phrased inversely as susceptibility, sensitivity, or distractibility, where performance degrades or responses are negatively influenced by noisy information. A smaller line of work defines the construct more narrowly as incorporation of incorrect retrieved claims, stability of attention outputs under random perturbations, typo-fixing from context, robustness to semantic embedding variation, or robustness to noisy environmental feedback, so the main disagreement is between a broad performance-stability framing and task- or component-specific variants.

**Space of facets.** Papers use several nearby labels for overlapping ideas, including noise sensitivity, noise resistance, reader robustness to noise, susceptibility to noisy information, robustness to distractors, invariance from irrelevant context, error tolerance, and distractibility. One recurring breakdown appears in retrieval-augmented generation, where relevant noise sensitivity and irrelevant noise sensitivity are separated by whether incorrect claims come from relevant or irrelevant retrieved chunks; another contrasts reader robustness to noise with retriever quality, and error tolerance with error suppression. A smaller set of papers uses more specific labels for particular settings, such as random-label robustness, typo-fixing, and robustness to semantic perturbation or noisy feedback.

**Space of measurement.** No measurement instrument and no behavioral indicator are linked to this construct. In practice, papers operationalize it by checking whether performance remains stable under injected or naturally occurring noise, for example on noisy speech recognition inputs and hypotheses-transcription pairs, demonstrations with wrong or randomly permuted labels, retrieval or comprehension with noisier context or irrelevant passages, semantically similar distractor video frames, perturbed semantic embeddings, or disturbed environments with noisy feedback. Most of these operationalizations match the prevailing definition of performance stability under noise, while one line instead quantifies a failure mode as the proportion of incorrect claims attributed to relevant versus irrelevant retrieved chunks.

## Sources

**[Large Language Models are Efficient Learners of Noise-Robust Speech Recognition](https://proceedings.iclr.cc/paper_files/paper/2024/file/13f80f05afe56daf8b65fc4384ab6d09-Paper-Conference.pdf)**
> The ability of the model to maintain performance when processing inputs that are corrupted or derived from noisy sources.

**[TOMATO: Assessing Visual Temporal Reasoning Capabilities in Multimodal Foundation Models](https://proceedings.iclr.cc/paper_files/paper/2025/file/16ba99f25a235f1100a4014d71d34ad8-Paper-Conference.pdf) (as "Susceptibility to noisy information")**
> The degree to which a model's performance is degraded by the presence of irrelevant, distracting, or misleading information in the input.

**[RAGChecker: A Fine-grained Framework for Diagnosing Retrieval-Augmented Generation](https://proceedings.neurips.cc/paper_files/paper/2024/file/27245589131d17368cccdfa990cbf16e-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Noise Sensitivity")**
> The latent tendency of the generator to incorporate incorrect information from retrieved chunks, whether relevant or irrelevant.

**[Boosting the Potential of Large Language Models with an Intelligent Information Assistant](https://proceedings.neurips.cc/paper_files/paper/2024/file/28d38c036365420f61ce03300418e44a-Paper-Conference.pdf) (as "Noise resistance")**
> The model's latent ability to maintain performance and generate correct answers when provided with irrelevant or distracting information.

**[RAGGED: Towards Informed Design of Scalable and Stable RAG Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hsia25a/hsia25a.pdf) (as "Noise sensitivity")**
> The disposition of a model to have its performance degrade when presented with irrelevant or distracting content in the retrieved context.

**[RAGGED: Towards Informed Design of Scalable and Stable RAG Systems](https://raw.githubusercontent.com/mlresearch/v267/main/assets/hsia25a/hsia25a.pdf) (as "Reader robustness to noise")**
> The latent ability of a reader model to maintain performance when exposed to irrelevant or distracting retrieved content, distinguishing useful information from noise.

**[Curse of High Dimensionality Issue in Transformer for Long Context Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/zhang25cr/zhang25cr.pdf) (as "Robustness to random noise")**
> The ability of a model's attention mechanism to maintain stable output distributions when subjected to random perturbations in attention weights, reducing sensitivity to noise.

**[MISP-Meeting: A Real-World Dataset with Multimodal Cues for Long-form Meeting Transcription and Summarization](https://aclanthology.org/2025.acl-long.753.pdf) (as "Error tolerance")**
> The latent ability of a model to maintain performance quality despite input errors or noise, such as producing coherent summaries from imperfect transcriptions.

**[Investigating Neurons and Heads in Transformer-based LLMs for Typographical Errors](https://aclanthology.org/2025.emnlp-main.313.pdf) (as "Typo-fixing")**
> The latent ability of an LLM to recognize and correct typographical errors in input text by leveraging local and global contextual information to recover the intended meaning.

**[EduLLM: Leveraging Large Language Models and Framelet-Based Signed Hypergraph Neural Networks for Student Performance Prediction](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25e/li25e.pdf) (as "Robustness to semantic perturbation")**
> The stability of model performance when exposed to noise or variation in LLM-derived semantic embeddings, reflecting resilience to changes in the underlying language model or input representation.

**[Closed-Loop Long-Horizon Robotic Planning via Equilibrium Sequence Modeling](https://raw.githubusercontent.com/mlresearch/v267/main/assets/li25cd/li25cd.pdf) (as "Robustness to noisy feedback")**
> The degree to which a planning system maintains performance when exposed to incorrect or misleading environmental feedback during execution.

**[Beyond Induction Heads: In-Context Meta Learning Induces Multi-Phase Circuit Emergence](https://raw.githubusercontent.com/mlresearch/v267/main/assets/minegishi25a/minegishi25a.pdf) (as "Random-label robustness")**
> The ability of a model to maintain in-context learning performance even when labels in the context are randomly permuted, indicating reliance on label presence rather than correct label-to-input mapping.

**[VideoRoPE: What Makes for Good Video Rotary Position Embedding?](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wei25h/wei25h.pdf) (as "Robustness to distractors")**
> The degree to which a model's performance remains stable when semantically similar but irrelevant frames are inserted near the target information in a video.

**[Towards Rationality in Language and Multimodal Agents: A Survey](https://aclanthology.org/2025.naacl-long.186.pdf) (as "Invariance from irrelevant context")**
> The capacity of an agent to focus on the logical essence of a problem and resist influence from semantically irrelevant or misleading contextual information.

**[Entropy-Based Decoding for Retrieval-Augmented Large Language Models](https://aclanthology.org/2025.naacl-long.236.pdf) (as "Distractibility")**
> The latent tendency of retrieval-augmented LLMs to be negatively influenced by irrelevant or conflicting information from both external retrieved documents and internal parametric knowledge, impairing accurate response generation.

## Relationships

### Associated with
- **Retrieval-augmented generation** (behaviors tasks)
  > Despite their success, retrieval-augmented LLMs still face the distractibility issue, where the generated responses are negatively influenced by noise from both external and internal knowledge sources.
  - [Entropy-Based Decoding for Retrieval-Augmented Large Language Models](https://aclanthology.org/2025.naacl-long.236.pdf)
