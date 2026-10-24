# Relation understanding
**Type:** Construct  
**Referenced in:** 4 papers  
**Also known as:** Relational understanding, Relationship comprehension, Composition identification  

## State of the Field

**Definition agreement:** Complementary. Most papers define relation understanding as the ability to comprehend relationships among objects or entities in a visual scene, while a few narrow this to specific spatial or arrangement relations or extend it to links between question concepts and the scene. These definitions still study the same general phenomenon of relational understanding, but they foreground different scopes and types of relations rather than using exactly the same definition.

**Space of definitions.** Across the papers, the prevailing usage treats relation understanding as an ability, sometimes explicitly a latent ability, to comprehend relationships among objects or other entities in an image or scene. Most definitions center on interactions and spatial arrangements, with some extending to actions, attribute bindings, emotional connections, or connections between concepts mentioned in a question and depicted in a scene. A smaller line of work uses a narrower framing under composition identification, focusing on determining spatial, orientational, occlusion, size-comparison, and arrangement relations among objects.

**Space of facets.** The construct is described through several relation types rather than a single example: papers mention interactional relations such as 'riding', 'looking into', and 'lying next to', alongside spatial arrangements, actions, attribute bindings, orientation, occlusion, size comparison, and arrangement. Relation understanding, relational understanding, and relationship comprehension are used for closely similar descriptions, while composition identification names a more specific subset centered on compositional relations. One paper also contrasts relationship comprehension with object identification, describing them as fundamentally different.

**Space of measurement.** Papers link the construct to 3 measurement instruments and no behavioral indicators. The linked operationalization is benchmark-based: SugarCrepe, Visual Genome, and Winoground are the named instruments, and one paper describes them as relational benchmarks designed to evaluate whether models understand and represent relationships between objects within an image. This operationalization matches the image-centered definitions and is narrower than the wording that includes entities or concepts from a question together with a scene.

**Links.** The only recorded links are measurement links, with one paper stating that relation understanding is measured by SugarCrepe, Visual Genome, and Winoground. No causal, correlational, or other related links are reported for this construct.

## Sources

**[Task Me Anything](https://proceedings.neurips.cc/paper_files/paper/2024/file/237ffa9a473eff1c66d085dba7f813ba-Paper-Datasets_and_Benchmarks_Track.pdf)**
> The latent ability to identify and comprehend the relationships between different objects, such as interactions, spatial arrangements, or emotional connections.

**[UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf) (as "Relational understanding")**
> The ability to comprehend and represent relationships between objects within an image, such as spatial arrangements, actions, or attribute bindings.

**[3D Question Answering via only 2D Vision-Language Models](https://raw.githubusercontent.com/mlresearch/v267/main/assets/wang25ef/wang25ef.pdf) (as "Relationship comprehension")**
> The ability to understand the connections and interactions between different entities or concepts mentioned in a question and depicted in a scene.

**[A-Bench: Are LMMs Masters at Evaluating AI-generated Images?](https://proceedings.iclr.cc/paper_files/paper/2025/file/d355518527578ce26b80da96e9fc2750-Paper-Conference.pdf) (as "Composition identification")**
> Determining spatial, orientational, occlusion, size-comparison, or arrangement relations among objects in an image.

## Relationships

### Relation understanding →
- **Visual Genome** (measurements) — *measured_by*
  > We include relational benchmarks, such as Visual Genome [Yuksekgonul et al., 2023], Winoground [Thrush et al., 2022a], and SugarCrepe [Hsieh et al., 2024] designed to evaluate the models’ ability to understand and represent relationships between objects within an image... (Section 3.2)
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)
- **Winoground** (measurements) — *measured_by*
  > We include relational benchmarks, such as Visual Genome [Yuksekgonul et al., 2023], Winoground [Thrush et al., 2022a], and SugarCrepe [Hsieh et al., 2024] designed to evaluate the models’ ability to understand and represent relationships between objects within an image... (Section 3.2)
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)
- **SugarCrepe** (measurements) — *measured_by*
  > We include relational benchmarks, such as Visual Genome [Yuksekgonul et al., 2023], Winoground [Thrush et al., 2022a], and SugarCrepe [Hsieh et al., 2024] designed to evaluate the models’ ability to understand and represent relationships between objects within an image... (Section 3.2)
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)
