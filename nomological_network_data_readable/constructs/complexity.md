# Complexity
**Type:** Construct  
**Referenced in:** 5 papers  

## State of the Field

**Definition agreement:** Too little evidence.

**Space of definitions.** Across the papers that define it, the prevailing framing treats complexity as a property of the generated response, specifically its level of sophistication, depth, intricacy, or elaboration. The wording varies slightly, but the definitions converge on complexity as a graded response attribute.

**Space of facets.** Papers most often position complexity within a bundle of response evaluation dimensions that also includes helpfulness, correctness, coherence, and verbosity. In these uses, it appears as one attribute among several, sometimes in the language of reward attributes and sometimes as a rating dimension in preference annotation.

**Space of measurement.** Operationally, complexity is linked to 2 measurement instruments, HelpSteer and HelpSteer2, and no behavioral indicators are linked to it. The common measurement pattern is multi-attribute response rating: HelpSteer is used for reward attributes including complexity, and HelpSteer2 annotates each response on a Likert-5 scale along complexity and related dimensions. This operationalization matches the definitions closely, because both treat complexity as a graded property of the response.

**Links.** Among linked constructs, helpfulness is the only one named, and one paper reports that complexity is correlated with it using Pearson's R, noting that the correlation became smaller in HelpSteer2 and that annotators were less influenced by complexity when assessing overall helpfulness. No causal or merely related links are reported.

## Sources

**[Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)**
> The level of sophistication, depth, or intricacy in the model's generated response.

## Relationships

### Complexity →
- **HelpSteer** (measurements) — *measured_by*
  > For HelpSteer, we use https://huggingface.co/Haoxiang-Wang/ RewardModel-Mistral-7B-for-DPA-v1 for all attributes of rewards, including helpfulness, correctness, coherence, complexity and verbosity.
  - [Decoding-Time Language Model Alignment with Multiple Objectives](https://proceedings.neurips.cc/paper_files/paper/2024/file/57c89126d60c209f48d0e6395c766bb3-Paper-Conference.pdf)
- **Helpfulness** (constructs) — *correlates*
  > Additionally, the Pearson’s R values for both complexity (0.2361 to 0.1805) and verbosity (0.2555 to 0.0600) have decreased, indicating that annotators are less influenced by the complexity and verbosity of responses when assessing overall helpfulness in HelpSteer2.
  - [HelpSteer 2: Open-source dataset for training top-performing reward models](https://proceedings.neurips.cc/paper_files/paper/2024/file/02fd91a387a6a5a5751e81b58a75af90-Paper-Datasets_and_Benchmarks_Track.pdf)
