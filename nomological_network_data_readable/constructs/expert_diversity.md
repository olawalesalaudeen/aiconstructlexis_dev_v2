# Expert diversity
**Type:** Construct  
**Referenced in:** 9 papers  
**Also known as:** Functional similarity  

## State of the Field

**Definition agreement:** Consensus. Most papers define expert diversity as experts within an MoE having distinct, non-redundant specializations, capabilities, knowledge, or parameters, so they are studying the same core property of differentiation among experts. One paper instead describes equivalent outputs and redundancy, but this appears to be an outlying reversal rather than a substantial alternative definition across the set.

**Space of definitions.** Across these papers, the prevailing usage treats the construct as expert-to-expert distinctness within an MoE model: experts have dissimilar parameters, non-overlapping capabilities or processing preferences, and distinct, non-redundant knowledge, all described as signs of functional specialization. This framing is repeatedly contrasted with overlap in expert functionalities or other forms of redundancy. A smaller line of work uses the alternative label functional similarity, defining the comparison instead by experts producing equivalent outputs for the same input, which reflects redundancy in learned representations.

**Space of facets.** Papers do not divide the construct into formal subtypes. Instead, they organize it through contrasts: most describe diversity through specialization, uniqueness, and complementary expert roles, while the opposing side is described as overlap, redundancy, functional equivalence, or equivalent outputs on the same input. The terminology is not fully uniform, because most papers use expert diversity for the distinctness side of the comparison, whereas a smaller line of work uses functional similarity for the equivalence and redundancy side.

**Space of measurement.** No measurement instrument or behavioral indicator is linked to it. In the paper text, authors nonetheless operationalize the idea through comparisons among experts, for example by reporting average similarity scores between experts, or by using average expert outputs over a calibration dataset and output similarity to capture functional relationships and functional equivalence among grouped experts. These operational details focus on inter-expert similarity rather than a named benchmark or evaluation instrument.

**Links.** No causal, correlational, or related links to other constructs are reported for this construct.

## Sources

**[Layerwise Recurrent Router for  Mixture-of-Experts](https://proceedings.iclr.cc/paper_files/paper/2025/file/250a6c6a7a7216f5dec1364e9a93abf4-Paper-Conference.pdf)**
> The degree to which the different expert networks within a Mixture-of-Experts model have dissimilar parameters, indicating functional specialization.

**[Retraining-free Merging of Sparse MoE via Hierarchical Clustering](https://raw.githubusercontent.com/mlresearch/v267/main/assets/chen25aq/chen25aq.pdf) (as "Functional similarity")**
> The degree to which different experts in an SMoE model produce equivalent outputs given the same input, reflecting underlying redundancy in learned representations.
