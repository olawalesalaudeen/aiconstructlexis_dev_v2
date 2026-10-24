# Multimodal integration
**Type:** Construct  
**Referenced in:** 11 papers  
**Also known as:** Cross-modal fusion, Cross-modal integration, Multimodal fusion, Multi-modal fusion  

## State of the Field

**Definition agreement:** Consensus. All papers define multimodal integration as a model's latent or internal capability to combine, fuse, or integrate information from multiple modalities into a coordinated or unified understanding for reasoning, generation, or task performance. The differences are only in wording and emphasis, such as mentioning semantic correspondences, unified representations, or a medical application, not in the core phenomenon being defined.

**Space of definitions.** Across papers, the prevailing usage treats multimodal integration as a latent or internal model capability to fuse, combine, or integrate information from multiple modalities and reason over it to form a coherent or unified understanding. Most definitions differ mainly in wording and in the modalities named, ranging from audio, video, and text to text and images, and several tie the capability to downstream reasoning or generation. A smaller task-specific framing states the same idea more narrowly, as the ability to combine modalities to perform a task or to produce accurate medical interpretations.

**Space of facets.** Papers do not present a stable subtype taxonomy, but they repeatedly use multimodal integration, multimodal fusion, cross-modal fusion, and cross-modal integration for closely similar definitions. Some versions emphasize preserving semantic and structural correspondences or building a unified representation, while others describe the mechanism through pre-fusion operations, modality fusion layers, and cross-modal attention. Several source snippets also locate the process within model internals, describing effective cross-modal feature alignment, attention to instruction-relevant or semantically critical regions, and fusion that occurs abruptly in middle layers.

**Space of measurement.** Operationalization is sparse in the recorded links: papers connect the construct to 1 measurement instrument, MIMIC-IV, and to no behavioral indicators or other constructs. The only linked instrument is MIMIC-IV, and one paper records the construct as measured by this large-scale multimodal clinical dataset in a setup that pretrains models on CLIMB and transfers them to MIMIC-IV. Compared with the definitions, which span audio, video, text, and image combinations, this recorded measurement is narrower in setting.

## Sources

**[AffectGPT: A New Dataset, Model, and Benchmark for Emotion Understanding with Multimodal Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/lian25a/lian25a.pdf)**
> The model's latent capability to effectively fuse and reason over information from different modalities, such as audio, video, and text, to form a coherent understanding.

**[Graph4MM: Weaving Multimodal Learning with Structural Information](https://raw.githubusercontent.com/mlresearch/v267/main/assets/ning25a/ning25a.pdf) (as "Cross-modal fusion")**
> The latent ability to combine information from different modalities (e.g., text and vision) in a way that preserves and leverages their semantic and structural correspondences for downstream reasoning and generation.

**[Who is in the Spotlight: The Hidden Bias Undermining Multimodal Retrieval-Augmented Generation](https://aclanthology.org/2025.emnlp-main.768.pdf) (as "Cross-modal integration")**
> The latent ability of a model to effectively combine and reason over information from different modalities, such as text and images, in a coordinated manner.

**[Can MLLMs Understand the Deep Implication Behind Chinese Images?](https://aclanthology.org/2025.acl-long.700.pdf) (as "Multimodal fusion")**
> The model's internal capability to effectively integrate and process information from different modalities, such as text and images, to form a unified understanding.

**[Asclepius: A Spectrum Evaluation Benchmark for Medical Multi-Modal Large Language Models](https://aclanthology.org/2025.acl-long.1178.pdf) (as "Multi-modal fusion")**
> The latent ability to synthesize and reason over both textual and visual inputs in a coordinated way to produce accurate medical interpretations.
