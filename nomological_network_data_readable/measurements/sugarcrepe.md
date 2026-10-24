# SugarCrepe
**Type:** Measurement  
**Referenced in:** 7 papers  

## State of the Field

**What it is.** Across the papers, SugarCrepe is most commonly treated as a compositionality benchmark for vision-language models. Definitions describe it as a large-scale benchmark for systematically evaluating compositional reasoning by testing swaps, replacements, and additions of objects, attributes, and relations. A smaller description emphasizes a more fine-grained setup in which attributes and semantic relationships are interlinked, with evaluation centered on a single image and caption choice; one paper adds that, because only a single image is provided, the task is simplified to Text Score.

**What it is claimed to measure.** Papers link SugarCrepe to 3 constructs and no behavioral indicators. The dominant measurement claim is compositional: papers use it to measure compositional reasoning and compositionality, including analyses of models' compositional understanding and evaluations of VLMs' ability for compositionality. A smaller line of work also reports it as measuring relation understanding, placing it among relational benchmarks for evaluating models' ability to understand and represent relationships between objects within an image.

**Space of uses.** No measurement instrument is linked to SugarCrepe. Papers nevertheless use it in broader evaluation suites: some position it as a challenging composition benchmark that they mainly use for evaluation, while others add it to complete an evaluation. It also appears alongside Visual Genome and Winoground in a set of relational benchmarks.

**Concerns raised.** One paper raises a concern in its discussion of SugarCrepe, stating that current benchmarks proposed to test VLM ability for compositionality are "easily hackable".

## Sources

**[TripletCLIP:  Improving Compositional Reasoning of CLIP via Synthetic Vision-Language Negatives](https://proceedings.neurips.cc/paper_files/paper/2024/file/39781da4b5d05bc2908ce08e43bc6404-Paper-Conference.pdf)**
> A large-scale benchmark designed to systematically evaluate the compositional reasoning capabilities of vision-language models by testing their ability to handle swaps, replacements, and additions of objects, attributes, and relations.

## Relationships

### → SugarCrepe
- **Compositional reasoning** (constructs) — *measured_by*
  > We comprehensively analyze the compositional understanding of models on the SugarCrepe benchmark, as detailed in Table 4. (Section 4.2)
  - [TripletCLIP:  Improving Compositional Reasoning of CLIP via Synthetic Vision-Language Negatives](https://proceedings.neurips.cc/paper_files/paper/2024/file/39781da4b5d05bc2908ce08e43bc6404-Paper-Conference.pdf)
- **Relation understanding** (constructs) — *measured_by*
  > We include relational benchmarks, such as Visual Genome [Yuksekgonul et al., 2023], Winoground [Thrush et al., 2022a], and SugarCrepe [Hsieh et al., 2024] designed to evaluate the models’ ability to understand and represent relationships between objects within an image... (Section 3.2)
  - [UniBench: Visual Reasoning Requires Rethinking Vision-Language Beyond Scaling](https://proceedings.neurips.cc/paper_files/paper/2024/file/96271227d3e204501d199433e56af289-Paper-Datasets_and_Benchmarks_Track.pdf)
