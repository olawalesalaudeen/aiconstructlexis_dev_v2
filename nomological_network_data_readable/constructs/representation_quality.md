# Representation quality
**Type:** Construct  
**Referenced in:** 7 papers  
**Also known as:** Task vector quality, Visual feature quality, Feature representation capability, Representational capability, Representation capabilities  

## State of the Field

**Definition agreement:** Complementary. Most papers use representation quality for the quality of a model's internal representations or embeddings in capturing information that is useful for downstream tasks, such as task-relevant, semantic, or biological information. A few papers foreground different facets of that same representational phenomenon, such as separability and decodability of task representations or preservation of image details, so the definitions differ in emphasis and scope but can be combined without contradiction.

**Space of definitions.** Across papers, the prevailing usage treats representation quality as a latent ability of a model's internal representations, features, or embeddings to encode task-relevant information in a usable feature space for downstream tasks. Several definitions stress preserving useful information while discarding noise, or producing embeddings that support retrieval, clustering, semantic similarity, binding prediction, or the distinction of tasks and knowledge domains. A smaller line of work narrows the construct to specific representational objects: task vector quality is the distinctness and decodability of a task representation for triggering correct in-context learning behavior, while visual feature quality is the preservation of semantic, structural, and pixel-level image details for multimodal alignment and reasoning. The main disagreement is over scope and reference standard, broad hidden-state or embedding quality versus task-specific or modality-specific representations, assessed by downstream usefulness, decodability, or detail preservation.

**Space of facets.** Papers organize the construct through several facets rather than one common breakdown. One paper explicitly frames it through information theory, geometry, and invariance to input perturbations, and further states that compression (entropy), geometry (curvature and rank), and invariance are all facets of how the Gram matrix distributes variance. Across papers, nearby labels such as feature representation capability, representational capability, task vector quality, and visual feature quality are used for overlapping but not identical objects: some refer to general hidden representations or text embeddings, others to task encodings, visual encoder outputs, or antibody-sequence embeddings.

**Space of measurement.** Operationalization is explicit but narrow in the recorded links: the construct is linked to 1 measurement instrument, MTEB, and papers use it for embedding performance and text-embedding tasks. It is also linked to 2 behavioral indicators, Image reconstruction and Protein understanding, but the recorded relationships treat them as a cause and a related concept rather than as direct measures. Beyond the named instrument, papers operationalize the construct through task decodability, downstream-task benchmarks for binding prediction, and analyses based on compression, geometry, and invariance. These operationalizations partly match definitions centered on downstream usefulness, while others target structural properties of representations or preservation of image detail.

**Links.** In the relationship claims, one paper reports a causal relationship from representation quality to multimodal alignment. One paper also reports a causal relationship from image reconstruction to representation quality, describing reconstruction of input images through a diffusion model conditioned on visual encoder outputs as establishing a path from pixel space to visual features. A separate paper treats protein understanding as related to representation quality in the context of binding-prediction benchmarks, and no correlational link is reported.

## Sources

**[Exploiting Presentative Feature Distributions for Parameter-Efficient Continual Learning of Large Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/cheng25j/cheng25j.pdf) (as "Feature representation capability")**
> The inherent ability of a pre-trained model to encode data into a feature space that can be used to distinguish and categorize different tasks and knowledge domains.

**[Emergence and Effectiveness of Task Vectors in In-Context Learning: An Encoder Decoder Perspective](https://raw.githubusercontent.com/mlresearch/v267/main/assets/han25h/han25h.pdf) (as "Task vector quality")**
> The degree to which a model's internal representation of a task is distinct and decodable, determining the effectiveness of triggering correct in-context learning behavior.

**[Layer by Layer: Uncovering Hidden Representations in Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/skean25a/skean25a.pdf)**
> The latent property of a model's internal representations that determines their effectiveness in preserving task-relevant information while discarding noise, as reflected in downstream performance and structural properties like compression, geometry, and invariance.

**[DS-VLM: Diffusion Supervision Vision Language Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25p/sun25p.pdf) (as "Visual feature quality")**
> The degree to which visual encoder outputs preserve semantic, structural, and pixel-level details from the input image, enabling accurate multimodal alignment and reasoning.

**[Generative Representational Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/70cf215430492f7d34830a24e744b3f1-Paper-Conference.pdf) (as "Representational capability")**
> The latent ability of a model to produce high-quality numerical vector representations (embeddings) of text for tasks like retrieval, clustering, and semantic similarity.

**[A SARS-CoV-2 Interaction Dataset and VHH Sequence Corpus for Antibody Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d2a1e47f7dc635fac77fbd6e2ec799e4-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Representation capabilities")**
> The degree to which a model's learned embeddings of antibody sequences effectively capture the biological information necessary for downstream tasks like binding prediction.

## Relationships

### Representation quality →
- **MTEB** (measurements) — *measured_by*
  > For embedding performance we evaluate using the 56 main datasets from MTEB (Muennighoff et al., 2023c). (Section 3.1)
  - [Generative Representational Instruction Tuning](https://proceedings.iclr.cc/paper_files/paper/2025/file/70cf215430492f7d34830a24e744b3f1-Paper-Conference.pdf)
- **Multimodal alignment** (constructs) — *causes*
  > The improvement on MMStar, which emphasizes fine-grained multimodal alignment and reasoning under instruction-following settings, demonstrates DS-VLM’s ability to preserve semantic coherence across modalities through enhanced visual feature quality. (Section 4.2)
  - [DS-VLM: Diffusion Supervision Vision Language Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25p/sun25p.pdf)

### → Representation quality
- **Image reconstruction** (behaviors tasks) — *causes*
  > This approach simultaneously preserves high-level semantic alignment through conventional text supervision while enhancing visual feature quality via pixel-level reconstruction constraints. (Abstract)
  - [DS-VLM: Diffusion Supervision Vision Language Model](https://raw.githubusercontent.com/mlresearch/v267/main/assets/sun25p/sun25p.pdf)

### Associated with
- **Protein understanding** (behaviors tasks)
  > These results conﬁrm that AVIDa-SARS-CoV-2 provides valuable benchmarks for assessing the representation capabilities of antibody language models for binding prediction, thereby facilitating the development of AI-driven antibody discovery.
  - [A SARS-CoV-2 Interaction Dataset and VHH Sequence Corpus for Antibody Language Models](https://proceedings.neurips.cc/paper_files/paper/2024/file/d2a1e47f7dc635fac77fbd6e2ec799e4-Paper-Datasets_and_Benchmarks_Track.pdf)
